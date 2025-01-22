import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/qureis";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    },
  });

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data?.authenticate?.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
