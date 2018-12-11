import {
  ValidatedCurrencies,
  ValidCurrency
} from "./helpers";

export default class Currency {

  constructor(client) {
    this.currencyStackClient = client;
  }

  /**
   * get currency conversion rates from targets
   *
   * @param {String} base
   * @param {Array} targets
   *
   * @returns {Promise} promise resolving to response object
   *
   */
   GetCurrencyConvertion(base, targets) {

    if (
      ValidatedCurrencies(targets).length === 0
    ) {
      return Promise.reject(new Error("invalid target currency"));
    }

    if (
      !ValidCurrency(base)
    ) {
      return Promise.reject(new Error("invalid base currency"));
    }

    return this.currencyStackClient.httpClient
      .get(`/currency`, {
        params: {
          apikey: this.apikey,
          base,
          targets
        }
      })
      .then(response => response.data)
      .catch(() =>
        Promise.reject(new Error("Request failed with status code 400"))
      );
  };
}