import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../theme";
import Logo from "./Logo";
import Info from "./Info";
import Feedback from "./Feedback";

const RepositoryItem = ({ respository }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: theme.colors.whiteBackground,
      width: "auto",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = respository;
  return (
    <View style={styles.container}>
      <Logo ownerAvatarUrl={ownerAvatarUrl} />
      <Info fullName={fullName} language={language} description={description} />
      <Feedback
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
