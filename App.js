// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Screen1 from "./Views/Screen1";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Screen1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
