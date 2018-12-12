import assert from "assert";
import nock from 'nock';
import {
    Client
} from "../src/index";

describe('get currency rates', () => {
    it('it should send a get request that will return currency rates', async () => {
        nock('https://api.currencystack.io')
            .get(`/currency`)
            .query({
                base: "EUR",
                target: "USD,EGP",
                apikey: "api key here"
            })
            .reply(200, {
                rates: {
                    EGP: 20.296,
                    USD: 1.133
                }
            });

        const currencyStackClient = new Client('api key here');

        const response = await currencyStackClient.currencyApi.GetCurrencyConvertion("EUR", ["USD", "EGP"])
            .catch(e => console.log(e.toString()));

        assert.deepStrictEqual(response, {
            rates: {
                EGP: 20.296,
                USD: 1.133
            }
        });

    });

    it('it should reject because no valid targets', async () => {
        nock('https://api.currencystack.io')
            .get(`/currency`)
            .query({
                base: "EUR",
                target: "USD,EGP",
                apikey: "api key here"
            })
            .reply(200, {});

        const currencyStackClient = new Client('api key here');

        await assert.rejects(
            async () => {
                await currencyStackClient.currencyApi.GetCurrencyConvertion("EUR", ["", ""])
            }, {
                name: 'Error',
                message: 'invalid target currency'
            }
        );

    });

    it('it should reject because no valid base', async () => {
        nock('https://api.currencystack.io')
            .get(`/currency`)
            .query({
                base: "EUR",
                target: "USD,EGP",
                apikey: "api key here"
            })
            .reply(200, {});

        const currencyStackClient = new Client('api key here');

        await assert.rejects(
            async () => {
                await currencyStackClient.currencyApi.GetCurrencyConvertion(" ", ["EUR"])
            }, {
                name: 'Error',
                message: 'invalid base currency'
            }
        );
    });

});