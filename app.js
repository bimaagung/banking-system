const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const resolvers = require('./graphql/resolvers');
const typeDefs = gql(
  fs.readFileSync('./graphql/typeDefs.graphql', { encoding: 'utf-8' }),
);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3000).then(({ url }) => {
  console.log(`server running on ${url}`);
});
