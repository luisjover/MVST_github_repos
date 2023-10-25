import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
const { VITE_GITHUB_TOKEN: token } = import.meta.env;

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    }
  }
})

const GraphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

export default GraphqlClient;