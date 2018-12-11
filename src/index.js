import axios from "axios";
import Currency from "./Currency";

export default class Client {
  constructor(apiKey) {
    if (!apiKey) throw new Error("api key is required");

    this.apiKey = apiKey;
    this.httpClient = axios.create({
      baseURL: "https://api.currencystack.io",
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.currencyApi = new Currency(this);

  }


}