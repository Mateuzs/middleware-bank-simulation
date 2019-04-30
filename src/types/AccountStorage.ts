import { AccountType } from "./accountService";
export interface AccountDatabase {
  [pesel: string]: AccountObject;
}

export interface AccountObject {
  name: string;
  surname: string;
  password: string;
  accountType: AccountType;
  balance: number;
}
