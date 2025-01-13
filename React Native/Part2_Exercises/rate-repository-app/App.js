import { NativeRouter } from "react-router-native";
import Main from "./src/components/main";
import { StatusBar } from "expo-status-bar";

function App() {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
