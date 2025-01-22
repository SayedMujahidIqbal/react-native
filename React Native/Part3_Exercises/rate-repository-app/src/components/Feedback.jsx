import React from "react";
import { StyleSheet, View } from "react-native";
import Star from "./Star";
import Forks from "./Forks";
import Review from "./Review";
import Rating from "./Rating";

const Feedback = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const styles = StyleSheet.create({
    feedbackContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 10,
    },
    textAlign: {
      alignSelf: "center",
    },
    feedBackRow: {
      flexDirection: "column",
      flexWrap: "wrap",
      marginLeft: 30,
    },
  });

  return (
    <View style={styles.feedbackContainer}>
      <Star stargazersCount={stargazersCount} />
      <Forks forksCount={forksCount} />
      <Review reviewCount={reviewCount} />
      <Rating ratingAverage={ratingAverage} />
    </View>
  );
};

export default Feedback;
