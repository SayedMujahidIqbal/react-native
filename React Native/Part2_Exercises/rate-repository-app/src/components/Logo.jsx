import { Image, StyleSheet } from "react-native";

const Logo = ({ ownerAvatarUrl }) => {
  const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
  });
  return <Image src={ownerAvatarUrl} style={styles.logo} />;
};

export default Logo;
