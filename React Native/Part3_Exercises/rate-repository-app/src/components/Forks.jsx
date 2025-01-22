import Text from "./Text";
import { abbrNum } from "../utils/utils";
import { StyleSheet, View } from "react-native";

const Forks = ({ forksCount }) => {
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
          {abbrNum(forksCount, 1)}
        </Text>
      </View>
      <Text fontSize="subheading" color="textSecondary">
        Forks
      </Text>
    </View>
  );
};

export default Forks;
