const currencyStack = require("./dist/index");

const main = async () => {
    const currencyStackClient = new currencyStack.Client('api key here');

    const response = await currencyStackClient.currencyApi.GetCurrencyConvertion("AED", ["USD", "EUR", "egp"])
        .catch(e => console.log(e.toString()));

    console.log(response);
};


main();