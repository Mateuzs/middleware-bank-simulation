"use strict";
import CurrencyTable from "./currencyTable";
import { CurrencyType, CurrencyTypes } from "../types/currency";

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

const currencyTable = new CurrencyTable();

async function getCurrencyRates(call: any) {
  console.log("\nAnother bank subscriebed, requested currencies: ");
  const requiredCurrencies = call.request.currencies;

  console.log(requiredCurrencies);

  while (true) {
    const presentCurrencyRate = currencyTable.getRequiredCurrencyRates(
      requiredCurrencies
    );
    call.write(presentCurrencyRate);
    await sleep(5000);
  }
}

function getServer() {
  var server = new grpc.Server();
  server.addService(currency.CurrencyService.service, {
    getCurrencyRates: getCurrencyRates
  });
  return server;
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const host = process.argv[2];
const port = process.argv[3];

const currencyService = getServer();
currencyService.bind(
  `${host}:${port}`,
  grpc.ServerCredentials.createInsecure()
);
currencyService.start();
