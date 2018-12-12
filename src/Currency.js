import { ValidatedCurrencies, ValidCurrency } from "./helpers";

export default class Currency {
  constructor(client) {
    this.httpClient = client;
  }

  /**
   * get currency conversion rates from targets
   *
   * @param {String} base
   * @param {srting[]} targets
   *
   * @returns {Promise} promise resolving to response object
   *
   */
  GetCurrencyConvertion(base, targets) {
    const upperTargets = targets.map(t => t.toUpperCase());
    const validCurrencyList = ValidatedCurrencies(upperTargets);
    if (validCurrencyList.length === 0) {
      return Promise.reject(new Error("invalid target currency"));
    }

    if (!ValidCurrency(base)) {
      return Promise.reject(new Error("invalid base currency"));
    }

    return this.httpClient
      .get(`/currency`, {
        params: {
          base,
          target: validCurrencyList.join(",")
        }
      })
      .then(response => response.data)
      .catch(() =>
        Promise.reject(new Error("Request failed with status code 400"))
      );
  }
}
