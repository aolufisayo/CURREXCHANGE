const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const PORT = process.env.PORT || 5000
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const path = '/graphiql'
server.applyMiddleware({ app, path });

app.listen(PORT, () => {
    console.log(`graphql server running on http://localhost:${PORT}${server.graphqlPath}`)
})