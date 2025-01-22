import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";
import { validationSchema } from "../utils/utils";
import useSignIn from "../hooks/useSignin";
import { useNavigate } from "react-router-native";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme.colors.whiteBackground,
    },
    input: {
      borderColor: theme.colors.borderColor,
      borderRadius: 5,
      borderWidth: 1,
      height: 70,
      paddingLeft: 30,
    },
    btn: {
      backgroundColor: theme.colors.primaryBackground,
      borderRadius: 5,
      padding: 25,
    },
    text: {
      alignSelf: "center",
    },
    inputContainer: {
      marginBottom: 20,
    },
    error: {
      borderColor: theme.colors.error,
      borderRadius: 5,
      borderWidth: 1,
      height: 70,
      paddingLeft: 30,
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        await signIn({ username, password });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          error
          style={formik.errors.username ? styles.error : styles.input}
          placeholderTextColor={formik.errors.username && theme.colors.error}
          placeholder="Username"
          onChange={formik.handleChange("username")}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color="error" fontSize="body">
            {formik.errors.username}
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={formik.errors.username ? styles.error : styles.input}
          placeholder="Password"
          placeholderTextColor={formik.errors.username && theme.colors.error}
          onChange={formik.handleChange("password")}
          secureTextEntry
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="error" fontSize="body">
            {formik.errors.password}
          </Text>
        )}
      </View>
      <Pressable onPress={formik.handleSubmit} style={styles.btn}>
        <Text
          fontSize="subheading"
          fontWeight="bold"
          color="heading"
          style={styles.text}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
