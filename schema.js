const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        calculatePrice(type: Type!, margin: Float!, exchangeRate: Float!): ExchangeRate
    }

    enum Type {
        buy,
        sell
    }


    type ExchangeRate {
        price: Float
    }
`