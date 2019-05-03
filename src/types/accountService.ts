import { availableCurrencyType } from "./currency";

export const enum AccountType {
  STANDARD,
  PREMIUM
}

export interface CreateAccountRequest {
  name: string;
  surname: string;
  pesel: string;
  incomeDeclaration: number;
}

export interface AccountCreatedResponse {
  confirmationMessage: string;
  accountType: AccountType;
  password: string;
}

export interface AuthorisationData {
  pesel: string;
  password: string;
}

export interface AuthorisationResponse {
  message: string;
  accountType: AccountType;
}

export interface LoanRequest {
  authorisationData: AuthorisationData;
  currency: availableCurrencyType;
  amount: number;
  monthsPeriod: number;
}

export interface LoanOffer {
  currency: availableCurrencyType;
  amount: number;
  costInRequestedCurrency: number;
  costInNativeCurrency: number;
  totalAmountToPay: number;
  installmentInRequestedCurrency: number;
  installmentInNativeCurrency: number;
}
