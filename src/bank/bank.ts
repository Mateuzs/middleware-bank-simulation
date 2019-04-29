"use strict";

import {
  CurrencyType,
  availableCurrencyType,
  Currency,
  CurrencyTypes
} from "../types/currency";
import { parse } from "url";

import {
  getFreshCurrencyRate,
  launchCurrencyService
} from "./launchCurrencyService";
import AccountStorage from "./AccountStorage";
import launchAccountCreationService from "./launchAccountCreationService";

const bankAccountCrationServicePort = parseInt(process.argv[2], 10);
const bankAccountMaintenanceServicePort = parseInt(process.argv[3], 10);
const currencyOption = parseInt(process.argv[4], 10);
const currencyHost = process.argv[5];
const currencyPort = process.argv[6];

const accountStorage = new AccountStorage();

launchCurrencyService(currencyHost, currencyPort, currencyOption);
launchAccountCreationService(bankAccountCrationServicePort, accountStorage);
