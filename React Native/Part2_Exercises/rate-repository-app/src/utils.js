import * as yup from "yup";

export function abbrNum(number, decPlaces) {
  decPlaces = Math.pow(10, decPlaces);
  var abbrev = ["k", "m", "b", "t"];
  for (var i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);
    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }
      number += abbrev[i];
      break;
    }
  }
  return number;
}

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username should be at least 3 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password should be at least 5 characters long")
    .required("Password is required"),
});
