import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{
        uri: "https://www.apollopharmacy.in/medical-stores",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
