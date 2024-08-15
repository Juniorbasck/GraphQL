import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    helloWord: String!
 
    }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWord: () => {
        return "Hello World";
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
