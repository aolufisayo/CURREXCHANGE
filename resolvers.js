const { gql } = require('apollo-server');
const fetch = require('node-fetch');

exports.resolvers = {
    Query: {
        calculatePrice: async (root, args) => {
            //price variable to hold the return value from the fetch request
            let price;
            //holds the result of the margin calculation
            let rate;
            //send a fetch request to the coindesk ai to retrieve the current price of btc/usd
            await fetch(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`, {
                method: 'get'
            }).then(res => res.json()).then(response => price = response.bpi.USD.rate_float)
            //check if type == 'sell'
            if (args.type == 'sell') {
                let calc = args.margin / 100
                rate = price - calc
            }
            //check if type == buy
            if (args.type == 'buy') {
                let calc2 = args.margin / 100
                rate = price + calc2
            }
            //calculate the current price
            let result = rate * args.exchangeRate
            return {
                price: result
            }


        }
    }
}