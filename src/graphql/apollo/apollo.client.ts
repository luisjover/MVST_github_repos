import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
const { VITE_GITHUB_TOKEN: token } = import.meta.env;

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql"
});

// AuthLink to adds the token to the request's headers
const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    }
  }
})

// Apollo client initialization
const Client = new ApolloClient({
  // To use the Apollo DevTools on Chrome
  connectToDevTools: true,
  // Cache implementation
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

export default Client;