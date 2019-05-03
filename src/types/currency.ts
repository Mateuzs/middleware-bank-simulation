export enum availableCurrencyType {
  PLN = "PLN",
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
  HUF = "HUF",
  JPY = "JPY"
}

export interface CurrencyTypes {
  currencies: CurrencyType[];
}
export interface CurrencyType {
  currency: availableCurrencyType;
}

export interface CurrencyRates {
  currencies: Currency[];
}

export interface Currency {
  currency: availableCurrencyType;
  sellRate: number;
  buyRate: number;
}
