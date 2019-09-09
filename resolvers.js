const { gql } = require('apollo-server');
const fetch = require('node-fetch');

exports.resolvers = {
    Query: {
        calculatePrice: async (root, args) => {
            let price;
            let rate;
            await fetch(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`, {
                method: 'get'
            }).then(res => res.json()).then(response => price = response.bpi.USD.rate_float)

            if (args.type == 'sell') {
                let calc = args.margin / 100
                rate = price - calc
            }
            if (args.type == 'buy') {
                let calc2 = args.margin / 100
                rate = price + calc2
            }

            let result = rate * args.exchangeRate
            return {
                price: result
            }


        }
    }
}