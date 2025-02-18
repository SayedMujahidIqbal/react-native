import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

const { apolloUri } = Constants.expoConfig.extra;

const httpink = createHttpLink({
  uri: apolloUri,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = JSON.parse(await authStorage.getAccessToken());
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (error) {
      console.log(error);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
