export interface AccountDatabase {
  [pesel: string]: AccountObject;
}

export interface AccountObject {
  name: string;
  surname: string;
  password: string;
  accountType: string;
  balance: number;
}
