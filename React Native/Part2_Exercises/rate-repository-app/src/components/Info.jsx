import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const Info = ({ fullName, description, language }) => {
  const styles = StyleSheet.create({
    column: {
      flexDirection: "column",
      flexWrap: "wrap",
      marginLeft: 15,
    },
    languageBackground: {
      backgroundColor: theme.colors.primaryBackground,
      borderRadius: 5,
      padding: 10,
      alignSelf: "baseline",
      marginTop: 10,
    },
  });
  return (
    <View style={styles.column}>
      <Text fontWeight="bold" fontSize="subheading">
        {fullName}
      </Text>
      <Text fontSize="body" color="textSecondary">
        {description}
      </Text>
      <View style={styles.languageBackground}>
        <Text color="heading">{language}</Text>
      </View>
    </View>
  );
};

export default Info;
