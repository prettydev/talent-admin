import { InMemoryCache, ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import nookies from 'nookies';
import { split, ApolloLink } from 'apollo-link';

let token;

const getToken = () => {
  if (token != null) {
    return token;
  }
  token = nookies.get().ACCESS_TOKEN;
  return token;
};

const cache = new InMemoryCache();

const httpLink = createHttpLink({ uri: 'http://localhost:5000/graphql' });

const authLink = setContext(async (_, { headers }) => {
  getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const linkConcated = authLink.concat(httpLink);

const terminatingLink = split(
  ({ query: { definitions } }) =>
    definitions.some((node) => {
      const { kind } = node;

      return kind === 'OperationDefinition';
    }),
  linkConcated
);

export const client = new ApolloClient({
  // link,
  link: ApolloLink.from([terminatingLink]),
  cache,
});
