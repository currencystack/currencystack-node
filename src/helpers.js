import { currencyMap } from "./Constants";

export const ValidCurrency = currencyKey => !!currencyMap[currencyKey];

export const ValidatedCurrencies = (currencyKeys = []) =>
  currencyKeys.filter(x => currencyMap[x]);
