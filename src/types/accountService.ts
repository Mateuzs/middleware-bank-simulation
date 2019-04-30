export const enum AccountType {
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM"
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
