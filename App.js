import { StyleSheet, Text, View } from "react-native";
import React from "react";

import FeedScreen from "./src/screens/FeedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FeedScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#c9c9c9",
    alignItems: "center",
    justifyContent: "center",
  },
});
