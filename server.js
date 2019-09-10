const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

//initialize port variable to 5000 or port environment variable
const PORT = process.env.PORT || 5000
//create a server instance from the apolloserver class
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
});
//make the '/graphiql' path available 
const path = '/graphiql'
server.applyMiddleware({ app, path });
//spin up the server
app.listen(PORT, () => {
    console.log(`graphql server running on http://localhost:${PORT}${server.graphqlPath}`)
})