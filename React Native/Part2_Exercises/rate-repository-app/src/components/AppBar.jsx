import { Pressable, StyleSheet, View, ScrollView } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.linkContainer}>
          <Text fontWeight="bold" fontSize="heading" color="heading">
            Repositories
          </Text>
        </Link>
        <Link to="/signin" style={styles.linkContainer}>
          <Text fontWeight="bold" fontSize="heading" color="heading">
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
