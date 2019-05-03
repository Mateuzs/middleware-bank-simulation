import {
  CurrencyType,
  availableCurrencyType,
  Currency,
  CurrencyTypes
} from "../types/currency";
import { parse } from "url";

import { getFreshCurrencyRate, launchCurrencyService } from "./currencyService";

import AccountStorage from "./AccountStorage";
import createAccount from "./createAccount";
import requestLoan from "./requestLoan";
import checkAccountState from "./checkAccountState";
import authoriseUser from "./authoriseUser";

const thrift = require("thrift");
const AccountCreationService = require("../thrift/gen-nodejs/AccountCreationService");
const PremiumAccountManagenentService = require("../thrift/gen-nodejs/PremiumAccountManagenentService");
const StandardAccountManagementService = require("../thrift/gen-nodejs/StandardAccountManagementService");
const ttypes = require("../thrift/gen-nodejs/account_types");

const bankAccountCreationServicePort = parseInt(process.argv[2], 10);
const bankAccountMaintenanceServicePort = parseInt(process.argv[3], 10);
const currencyOption = parseInt(process.argv[4], 10);
const currencyHost = process.argv[5];
const currencyPort = process.argv[6];
const accountStorage = new AccountStorage();

//currency service
launchCurrencyService(currencyHost, currencyPort, currencyOption);
console.log("Bank has been subscribed to currency service");

// simple server
const accountCreationserver = thrift
  .createServer(
    AccountCreationService,
    {
      createAccount: createAccount(accountStorage)
    },
    {
      protocol: thrift.TBinaryProtocol,
      transport: thrift.TBufferedTransport
    }
  )
  .listen(bankAccountCreationServicePort);
console.log("Simple server running on " + bankAccountCreationServicePort);

// multiplex Server
const processor = new thrift.MultiplexedProcessor();

processor.registerProcessor(
  "StandardAccountManagementService",
  new StandardAccountManagementService.Processor({
    authoriseUser: authoriseUser(accountStorage),
    checkAccountState: checkAccountState(accountStorage)
  })
);
processor.registerProcessor(
  "PremiumAccountManagenentService",
  new PremiumAccountManagenentService.Processor({
    authoriseUser: authoriseUser(accountStorage),
    checkAccountState: checkAccountState(accountStorage),
    requestLoan: requestLoan(accountStorage)
  })
);

const maintenanceServer = thrift
  .createMultiplexServer(processor, {
    protocol: thrift.TBinaryProtocol,
    transport: thrift.TBufferedTransport
  })
  .on("error", function(error: Error) {
    console.log(error);
  })
  .listen(bankAccountMaintenanceServicePort);

console.log(
  "Multiplex Server running on port: " + bankAccountMaintenanceServicePort
);
