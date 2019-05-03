import {
  AccountType,
  CreateAccountRequest,
  AccountCreatedResponse
} from "../types/accountService";
import AccountStorage from "./AccountStorage";
import { Account } from "../types/AccountStorage";

const CryptoJS = require("crypto-js");

const createAccount = (accountStorage: AccountStorage) => (
  createAccountRequest: CreateAccountRequest
) => {
  const ttypes = require("../thrift/gen-nodejs/account_types");
  console.log("registration started..");

  if (accountStorage.checkAccountExistence(createAccountRequest.pesel)) {
    const exception = new ttypes.UserAlreadyExistException();
    exception.pesel = createAccountRequest.pesel;
    exception.message = "User Already Exists!";
    console.log("User already exist, I am sending an error!");
    throw exception;
  }

  const newPassword = "Pass" + createAccountRequest.pesel;
  const userAccount: Account = {
    name: createAccountRequest.name,
    surname: createAccountRequest.surname,
    authorisationData: {
      pesel: createAccountRequest.pesel,
      password: CryptoJS.MD5(newPassword).toString()
    },
    accountType:
      createAccountRequest.incomeDeclaration > 5000
        ? AccountType.PREMIUM
        : AccountType.STANDARD,
    balance: 0
  };

  accountStorage.saveNewAccount(createAccountRequest.pesel, userAccount);

  const accountCreatedResponse: AccountCreatedResponse = new ttypes.AccountCreatedResponse();

  accountCreatedResponse.confirmationMessage = `\nWe would like to confirm that you created and account!\nYou have a  ${
    userAccount.accountType === 0 ? "STANDARD" : "PREMIUM"
  } account. Use following password to login (hashed with MD5): `;
  accountCreatedResponse.accountType = userAccount.accountType;
  accountCreatedResponse.password = newPassword;

  console.log("registration ended, sending response..");

  return accountCreatedResponse;
};

export default createAccount;
