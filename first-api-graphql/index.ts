import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    helloWord: String!
 
    }

    type Mutation {
      createUser(name: String!): String
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

    Mutation: {
      createUser: (parent, args, ctx) => {
        console.log(args);
      }
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
