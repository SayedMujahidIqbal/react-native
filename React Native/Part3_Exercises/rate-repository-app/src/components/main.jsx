import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import { useEffect, useState } from "react";
import useAuthStorage from "../hooks/useAuthStorage";
import { useQuery } from "@apollo/client";
import { USER } from "../graphql/qureis";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.layoutBackgroundColor,
  },
});

const Main = () => {
  const { data } = useQuery(USER, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        {data?.me ? (
          <Route path="/" element={<RepositoryList />} />
        ) : (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
