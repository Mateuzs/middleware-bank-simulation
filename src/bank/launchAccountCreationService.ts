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
  const AccountCreationService = require("../thrift/gen-js/AccountCreationService");
  const ttypes = require("../thrift/gen-js/account_types");

  const server = thrift.createServer(AccountCreationService, {
    createAccount: function(userData: CreateAccountRequest) {
      console.log("registration started..");

      if (accountStorage.checkAccountExistence(userData.pesel)) {
        const userExistError = new ttypes.UserAlreadyExist();
        userExistError.pesel = userData;
        userExistError.message = "User Already Exists!";

        return userExistError;
      }

      const userAccount: AccountObject = {
        name: userData.name,
        surname: userData.surname,
        password: "password",
        accountType:
          userData.incomeDeclaration > 5000
            ? AccountType.PREMIUM
            : AccountType.STANDARD,
        balance: 0
      };

      accountStorage.saveNewAccount(userData.pesel, userAccount);

      const accountCreatedResponse: AccountCreatedResponse = new ttypes.AccountCreatedRepsonse();

      accountCreatedResponse.success = "success!";
      accountCreatedResponse.password = userAccount.password;

      return accountCreatedResponse;
    }
  });

  server.listen(port);
}
