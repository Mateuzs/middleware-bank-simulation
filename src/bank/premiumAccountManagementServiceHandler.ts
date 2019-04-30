import {
  AccountType,
  CreateAccountRequest,
  AuthorisationData,
  AccountCreatedResponse
} from "../types/accountService";
import AccountStorage from "./AccountStorage";
import { AccountObject } from "../types/AccountStorage";

export default function premiumAccountManagementServiceHandler(
  accountStorage: AccountStorage
) {
  return {
    checkAccountState: function(authorisationData: AuthorisationData) {
      const ttypes = require("../thrift/gen-nodejs/account_types");

      console.log("authorisation started..");

      if (!accountStorage.checkAccountExistence(authorisationData.pesel)) {
        const exception = new ttypes.UserDoNotExistException();
        exception.pesel = authorisationData.pesel;
        exception.message = "User Do Not Exists!";
        throw exception;
      }

      if (
        accountStorage.getAccountState(authorisationData.pesel).password !==
        authorisationData.password
      ) {
        const exception = new ttypes.InvalidPasswordException();
        exception.pesel = authorisationData.pesel;
        exception.message = "Wrong password!";
        throw exception;
      }

      const account = accountStorage.getAccountState(authorisationData.pesel);
      const accountState = new ttypes.Account();

      accountState.name = account.name;
      accountState.surname = account.surname;
      accountState.pesel = authorisationData.pesel;
      accountState.AccountType = account.accountType;
      accountState.balance = account.balance;

      return accountState;
    },
    requestLoan: function(_loanRequest) {}
  };
}
