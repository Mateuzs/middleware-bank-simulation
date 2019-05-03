import {
  AccountType,
  CreateAccountRequest,
  AuthorisationData,
  AccountCreatedResponse,
  LoanRequest,
  LoanOffer
} from "../types/accountService";
import AccountStorage from "./AccountStorage";
import { Account } from "../types/AccountStorage";
import { getFreshCurrencyRate } from "./currencyService";
import { availableCurrencyType } from "../types/currency";
const ttypes = require("../thrift/gen-nodejs/account_types");

const requestLoan = (accountStorage: AccountStorage) => (
  loanRequest: LoanRequest
) => {
  console.log("authorisation started..");

  if (
    !accountStorage.checkAccountExistence(loanRequest.authorisationData.pesel)
  ) {
    const exception = new ttypes.UserDoNotExistException();
    exception.pesel = loanRequest.authorisationData.pesel;
    exception.message = "User Do Not Exists!";
    console.log("User does not exist, I am sending an error!");
    throw exception;
  }

  if (
    accountStorage.getAccountState(loanRequest.authorisationData.pesel)
      .authorisationData.password !== loanRequest.authorisationData.password
  ) {
    const exception = new ttypes.InvalidPasswordException();
    exception.pesel = loanRequest.authorisationData.pesel;
    exception.message = "Wrong password!";
    console.log("Wrong password, I am sending an error!");
    throw exception;
  }

  console.log("authorisation ended, sending loan offer..");

  const currency = Object.values(availableCurrencyType)[loanRequest.currency];

  if (typeof getFreshCurrencyRate(currency) === "undefined") {
    const exception = new ttypes.CurrencyNotAvailableException();
    exception.currency = loanRequest.currency;
    exception.message = "Bank do not serve this currency, chose another one!";
    console.log("we do not have such currency, I am sending an error!");
    throw exception;
  }

  const ratio = 0.12;

  const costNative =
    loanRequest.amount *
    ratio *
    loanRequest.monthsPeriod *
    getFreshCurrencyRate(currency).sellRate;

  const costRequired = loanRequest.amount * ratio * loanRequest.monthsPeriod;

  const loanOffer: LoanOffer = new ttypes.LoanOffer();

  loanOffer.currency = loanRequest.currency;
  loanOffer.amount = loanRequest.amount;
  loanOffer.costInRequestedCurrency = costRequired;
  loanOffer.costInNativeCurrency = costNative;
  loanOffer.totalAmountToPay = costRequired + loanRequest.amount;
  loanOffer.installmentInRequestedCurrency =
    (costRequired + loanRequest.amount) / loanRequest.monthsPeriod;
  loanOffer.installmentInNativeCurrency =
    (costNative +
      loanRequest.amount * getFreshCurrencyRate(currency).sellRate) /
    loanRequest.monthsPeriod;

  return loanOffer;
};

export default requestLoan;
