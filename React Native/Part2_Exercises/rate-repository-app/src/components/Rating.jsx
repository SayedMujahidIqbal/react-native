import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { abbrNum } from "../utils";

const Rating = ({ ratingAverage }) => {
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
        <Text fontSize="subheading" fontWeight="bold">
          {abbrNum(ratingAverage, 1)}
        </Text>
      </View>
      <Text fontSize="subheading" color="textSecondary">
        Rating
      </Text>
    </View>
  );
};

export default Rating;
