// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Screen1 from "./Views/Screen1";
import MainScreen from "./Views/MainScreen";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState(false);

  setTimeout(() => {
    setActive(true);
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {active ? <Screen1 /> : <MainScreen />}
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
