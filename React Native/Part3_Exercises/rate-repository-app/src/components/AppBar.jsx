import { StyleSheet, View, ScrollView } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { Link, useNavigate } from "react-router-native";
import { useEffect, useState } from "react";
import { useApolloClient, useQuery } from "@apollo/client";
import { USER } from "../graphql/qureis";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroudColor,
    opacity: 0.8,
    paddingTop: 100,
    paddingBottom: 30,
    paddingLeft: 30,
    flexDirection: "row",
  },
  linkContainer: {
    marginRight: 20,
  },
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const { data } = useQuery(USER, {
    fetchPolicy: "cache-and-network",
  });

  const handleSignout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/signin");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {data?.me ? (
          <>
            <Link to="/" style={styles.linkContainer}>
              <Text fontWeight="bold" fontSize="heading" color="heading">
                Repositories
              </Text>
            </Link>
            <Link
              to="/signin"
              style={styles.linkContainer}
              onPress={handleSignout}
            >
              <Text fontWeight="bold" fontSize="heading" color="heading">
                Sign out
              </Text>
            </Link>
          </>
        ) : (
          <Link to="/signin" style={styles.linkContainer}>
            <Text fontWeight="bold" fontSize="heading" color="heading">
              Sign in
            </Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
