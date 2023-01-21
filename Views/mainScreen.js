import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";
import source from "../assets/icon.png";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
  },
});

export default MainScreen;
