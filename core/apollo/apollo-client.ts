import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import config from "../../core/config";
import { cache } from './apollo-client-cache';

const API_URL = config.apollo.APOLLO_URI;

const httpLink = new HttpLink({
  uri: API_URL,
  fetch,
});

const authLink = new ApolloLink((operation, forward) => {
  // set auto auth and refresh access token later
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});