import Client from "./src/index";


const main = async () => {
    const currencystackClient = new Client('api key here');

    const response = await currencystackClient.currencyApi.GetCurrencyConvertion("AED", ["USD", "EGP", "AED"]);

    console.log(response);
};


main();