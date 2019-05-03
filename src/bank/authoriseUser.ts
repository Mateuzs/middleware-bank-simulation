import {
  AccountType,
  AuthorisationData,
  AccountCreatedResponse,
  AuthorisationResponse
} from "../types/accountService";
import AccountStorage from "./AccountStorage";
import { Account } from "../types/AccountStorage";

const authoriseUser = (accountStorage: AccountStorage) => (
  authorisationData: AuthorisationData
) => {
  const ttypes = require("../thrift/gen-nodejs/account_types");

  console.log("authorisation started..");

  if (!accountStorage.checkAccountExistence(authorisationData.pesel)) {
    const exception = new ttypes.UserDoNotExistException();
    exception.pesel = authorisationData.pesel;
    exception.message = "User Do Not Exists!";
    console.log("User does not exist, I am sending an error!");

    throw exception;
  }

  if (
    accountStorage.getAccountState(authorisationData.pesel).authorisationData
      .password !== authorisationData.password
  ) {
    const exception = new ttypes.InvalidPasswordException();
    exception.pesel = authorisationData.pesel;
    exception.message = "Wrong password!";
    console.log("Wrong password! I am sending an error!");

    throw exception;
  }

  console.log("authorisation ended successfully, sending message..");

  const account = accountStorage.getAccountState(authorisationData.pesel);
  const authResponse: AuthorisationResponse = new ttypes.AuthorisationResponse();

  authResponse.message = "You have authorised succesfully!";
  authResponse.accountType = account.accountType;

  return authResponse;
};

export default authoriseUser;
