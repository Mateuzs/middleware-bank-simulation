import {
  AccountType,
  CreateAccountRequest,
  AccountCreatedResponse
} from "../types/accountService";
import AccountStorage from "./AccountStorage";
import { AccountObject } from "../types/AccountStorage";

export default function accountCreatonServiceHandler(
  accountStorage: AccountStorage
) {
  return {
    createAccount: function(createAccountRequest: CreateAccountRequest) {
      const ttypes = require("../thrift/gen-nodejs/account_types");
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

      accountCreatedResponse.confirmationMessage = "success!";
      accountCreatedResponse.accountType = userAccount.accountType;
      accountCreatedResponse.password = userAccount.password;

      return accountCreatedResponse;
    }
  };
}
