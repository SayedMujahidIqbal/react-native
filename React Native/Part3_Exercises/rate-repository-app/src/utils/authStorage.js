import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(`${this.namespace}`);
    return accessToken;
  }

  async setAccessToken(token) {
    await AsyncStorage.setItem(`${this.namespace}`, JSON.stringify(token));
  }

  async removeAccessToken() {
    await AsyncStorage.clear();
  }
}

export default AuthStorage;
