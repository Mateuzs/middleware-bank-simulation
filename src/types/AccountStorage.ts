import { AccountType, AuthorisationData } from "./accountService";
export interface AccountDatabase {
  [pesel: string]: Account;
}

export interface Account {
  name: string;
  surname: string;
  authorisationData: AuthorisationData;
  accountType: AccountType;
  balance: number;
}
