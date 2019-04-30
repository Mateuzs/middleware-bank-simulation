import { AccountDatabase, AccountObject } from "../types/AccountStorage";

export default class AccountStorage {
  private database: AccountDatabase;

  constructor() {
    this.database = {};
  }

  public checkAccountExistence(pesel: string): boolean {
    return Object.keys(this.database).includes(pesel);
  }

  public saveNewAccount(pesel: string, account: AccountObject): void {
    this.database[pesel] = account;
  }

  public getAccountState(pesel: string): AccountObject {
    return this.database[pesel];
  }
}
