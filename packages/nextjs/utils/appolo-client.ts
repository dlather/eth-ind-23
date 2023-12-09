import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: `https://api.studio.thegraph.com/query/52089/eth-ind-goerli/"v0.0.2"`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;