import {
  Currency,
  availableCurrencyType,
  CurrencyType
} from "../types/currency";

export default class CurrencyTable {
  private currencyTable: Currency[];

  constructor() {
    this.currencyTable = [
      { currency: availableCurrencyType.PLN, sellRate: 1.0, buyRate: 1.0 },
      {
        currency: availableCurrencyType.EUR,
        sellRate: 4.4823,
        buyRate: 4.1321
      },
      {
        currency: availableCurrencyType.GBP,
        sellRate: 5.5667,
        buyRate: 4.1323
      },
      {
        currency: availableCurrencyType.USD,
        sellRate: 4.0133,
        buyRate: 3.7834
      },
      {
        currency: availableCurrencyType.HUF,
        sellRate: 0.4768,
        buyRate: 0.4332
      },
      { currency: availableCurrencyType.JPY, sellRate: 0.3034, buyRate: 0.2114 }
    ];
  }

  public getRequiredCurrencyRates(currencyTypes: CurrencyType[]) {
    const requiredCurrencyRates = this.currencyTable.filter(curr => {
      return currencyTypes
        .map(elem => elem.currency === curr.currency)
        .reduce((acc, ans) => acc || ans, false);
    });

    const freshCurrencyRate = requiredCurrencyRates.map(currency => {
      if (currency.currency === availableCurrencyType.PLN) return currency;
      const min = 95;
      const max = 105;
      const change = (Math.floor(Math.random() * (max - min)) + min) / 100;
      return {
        currency: currency.currency,
        buyRate: (currency.buyRate * change).toPrecision(5),
        sellRate: (currency.sellRate * change).toPrecision(5)
      };
    });

    return { currencies: freshCurrencyRate };
  }
}
