// apollo-client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.findrecruiters.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
