import {
  AccountType,
  CreateAccountRequest,
  AccountCreatedResponse
} from "../types/accountCreationService";
import AccountStorage from "./AccountStorage";
import { AccountObject } from "../types/AccountStorage";

export default function launchAccountCreationService(
  port: number,
  accountStorage: AccountStorage
) {
  const thrift = require("thrift");
  const AccountCreationService = require("../thrift/gen-nodejs/AccountCreationService");
  const ttypes = require("../thrift/gen-nodejs/account_types");

  const server = thrift.createServer(AccountCreationService, {
    createAccount: function(createAccountRequest: CreateAccountRequest) {
      console.log("registration started..");

      if (accountStorage.checkAccountExistence(createAccountRequest.pesel)) {
        const error = new ttypes.UserAlreadyExist();
        error.pesel = createAccountRequest.pesel;
        error.message = "User Already Exists!";
        throw error;
      }

      const userAccount: AccountObject = {
        name: createAccountRequest.name,
        surname: createAccountRequest.surname,
        password: "password",
        accountType:
          createAccountRequest.incomeDeclaration > 5000
            ? AccountType.PREMIUM
            : AccountType.STANDARD,
        balance: 0
      };

      accountStorage.saveNewAccount(createAccountRequest.pesel, userAccount);

      const accountCreatedResponse: AccountCreatedResponse = new ttypes.AccountCreatedResponse();

      accountCreatedResponse.success = "success!";
      accountCreatedResponse.password = userAccount.password;

      return accountCreatedResponse;
    }
  });

  server.listen(port);
}
