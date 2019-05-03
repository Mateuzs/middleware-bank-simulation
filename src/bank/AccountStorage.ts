import { AccountDatabase, Account } from "../types/AccountStorage";

export default class AccountStorage {
  private database: AccountDatabase;

  constructor() {
    this.database = {};
  }

  public checkAccountExistence(pesel: string): boolean {
    return Object.keys(this.database).includes(pesel);
  }

  public saveNewAccount(pesel: string, account: Account): void {
    this.database[pesel] = account;
  }

  public getAccountState(pesel: string): Account {
    return this.database[pesel];
  }
}
