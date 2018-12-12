# CurrencyStack node library [![Build Status](https://travis-ci.com/currencystack/currencystack-node.svg?branch=master)](https://travis-ci.com/currencystack/currencystack-node)

client library for CurrencyStack

## Installation

```bash
yarn add CurrencyStack-node
```

## usage

Get currency conversion rates:

```javascript
const currencyStack = require("./dist/index");

const main = async () => {
    const currencyStackClient = new currencyStack.Client('api key here');

    const response = await currencyStackClient.currencyApi.GetCurrencyConvertion("AED", ["USD", "EUR", "egp"])
        .catch(e => console.log(e.toString()));

    console.log(response);
};


main();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
