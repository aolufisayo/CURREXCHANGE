const { gql } = require('apollo-server');

exports.typeDefs = gql`
    "calculate price query takes the type, margin and exchange-rate as input"
    type Query {
        calculatePrice(type: Type!, margin: Float!, exchangeRate: Float!): ExchangeRate
    }

    "currency exchange type restricted to buy and sell"
    enum Type {
        buy,
        sell
    }

    "returns a float value for the caculate price query"
    type ExchangeRate {
        price: Float
    }
`