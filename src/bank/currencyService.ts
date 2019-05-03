import {
  CurrencyType,
  availableCurrencyType,
  Currency,
  CurrencyTypes,
  CurrencyRates
} from "../types/currency";

let currencyRates: Currency[];

export function getFreshCurrencyRate(
  requiredCurrency: availableCurrencyType
): Currency {
  return currencyRates.filter(
    (currency: Currency) => currency.currency === requiredCurrency
  )[0];
}

export function launchCurrencyService(
  currencyHost: string,
  currencyPort: string,
  currencyOption: number
): void {
  const grpc = require("grpc");
  const protoLoader = require("@grpc/proto-loader");

  const PROTO_PATH = __dirname + "/../protos/currency.proto";

  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

  const currency = protoDescriptor.currency;

  const client = new currency.CurrencyService(
    `${currencyHost}:${currencyPort}`,
    grpc.credentials.createInsecure()
  );

  let requiredCurrency: CurrencyTypes;
  if (currencyOption === 1) {
    requiredCurrency = {
      currencies: [
        { currency: availableCurrencyType.PLN },
        { currency: availableCurrencyType.EUR },
        { currency: availableCurrencyType.USD },
        { currency: availableCurrencyType.GBP }
      ]
    };
  } else {
    requiredCurrency = {
      currencies: [
        { currency: availableCurrencyType.PLN },
        { currency: availableCurrencyType.EUR },
        { currency: availableCurrencyType.HUF },
        { currency: availableCurrencyType.JPY }
      ]
    };
  }

  const stream = client.getCurrencyRates(requiredCurrency);

  stream.on("data", (newCurrencyRates: CurrencyRates) => {
    console.log(newCurrencyRates);
    currencyRates = newCurrencyRates.currencies;
  });
  stream.on("end", () => console.log("CurrencyService has ended!"));
  stream.on("error", (e: Error) => console.log(e));
  stream.on("status", (status: object) => console.log(status));
}
