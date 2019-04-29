import {
  CurrencyType,
  availableCurrencyType,
  Currency,
  CurrencyTypes
} from "../types/currency";

let currencyRates: Currency[];

export function getFreshCurrencyRate(): Currency[] {
  return currencyRates;
}

export function launchCurrencyService(
  currencyHost: string,
  currencyPort: string,
  currencyOption: number
): void {
  const grpc = require("grpc");
  const protoLoader = require("@grpc/proto-loader");

  const PROTO_PATH = __dirname + "/../protos/currency.proto";
  // Suggested options for similarity to existing grpc.load behavior
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  // The protoDescriptor object has the full package hierarchy

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
  stream.on("data", (newCurrencyRates: Currency[]) => {
    console.log(newCurrencyRates);
    currencyRates = newCurrencyRates;
  });
  stream.on("end", () => console.log("CurrencyService has ended!"));
  stream.on("error", e => console.log(e));
  stream.on("status", status => console.log(status));
}
