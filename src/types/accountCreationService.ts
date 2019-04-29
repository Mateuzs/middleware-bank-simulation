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
  success: string;
  password: string;
}
