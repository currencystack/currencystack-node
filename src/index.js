import axios from "axios";
import Currency from "./Currency";

export class Client {
  constructor(apiKey) {
    if (!apiKey) throw new Error("api key is required");

    this.apiKey = apiKey;
    this.httpClient = axios.create({
      baseURL: "https://api.currencystack.io",
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.httpClient.interceptors.request.use(
      config => ({
        ...config,
        params: {
          ...config.params,
          ...(!!this.apiKey && {
            apikey: this.apiKey,
          }),
        }

      }),
      error => {
        throw new Error(error)
      }
    );



    this.currencyApi = new Currency(this.httpClient);

  }


}