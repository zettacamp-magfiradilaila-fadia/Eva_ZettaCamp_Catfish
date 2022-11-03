const { ApolloServer } = require('@apollo/server');
const { application } = require('express');
const express = require('express');
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.ApplyMiddleware({ app });
  app.listen(3000);
});
