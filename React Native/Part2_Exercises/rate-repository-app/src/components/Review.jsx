import { StyleSheet, View } from "react-native";
import { abbrNum } from "../utils";
import Text from "./Text";

const Review = ({ reviewCount }) => {
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
          {abbrNum(reviewCount, 1)}
        </Text>
      </View>
      <Text fontSize="subheading" color="textSecondary">
        Reviews
      </Text>
    </View>
  );
};

export default Review;
