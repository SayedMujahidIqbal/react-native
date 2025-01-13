import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { abbrNum } from "../utils";

const Star = ({ stargazersCount }) => {
  const styles = StyleSheet.create({
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
    <View style={styles.feedBackRow}>
      <View style={styles.textAlign}>
        <View style={styles.textAlign}>
          <Text fontSize="subheading" fontWeight="bold">
            {abbrNum(stargazersCount, 1)}
          </Text>
        </View>
      </View>
      <Text fontSize="subheading" color="textSecondary">
        Stars
      </Text>
    </View>
  );
};

export default Star;
