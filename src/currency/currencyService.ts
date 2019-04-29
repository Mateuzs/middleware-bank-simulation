"use strict";
import CurrencyTable from "./currencyTable";
import { CurrencyType, CurrencyTypes } from "../types/currency";

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

const currencyTable = new CurrencyTable();

async function getCurrencyRates(call) {
  const requiredCurrencies = call.request.currencies;
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const port = process.argv[2];
const currencyService = getServer();
currencyService.bind(
  `0.0.0.0:${port}`,
  grpc.ServerCredentials.createInsecure()
);
currencyService.start();
