import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  Overpass_400Regular,
  Overpass_500Medium,
} from "@expo-google-fonts/overpass";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

const Screen2 = ({ navigation }) => {
  //   const [appIsReady, setAppIsReady] = useState(false);
  let [fontsloaded] = useFonts({
    // Overpass_400Regular,
    // Overpass_500Medium,
    Regular: require("../assets/fonts/Prompt-Regular.ttf"),
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (fontsloaded) {
    //   return SplashScreen.hideAsync();
    // return undefined;
  }

  const [number, setHour] = useState("12");
  const [min, setMin] = useState("12");
  const [sec, setSec] = useState("12");
  const [time, setTime] = useState("gg");

  const showPage = (page) => {
    console.log(page);
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Text style={styles.number}>
        {number}
        <Text style={styles.small}>Hr</Text>
      </Text>
      <Text style={styles.number}>
        {min}
        <Text style={styles.small}>Min</Text>
      </Text>
      <Text style={styles.number2}>
        {sec}
        <Text style={styles.small}>Sec</Text>
      </Text>
      <View style={styles.startStop}>
        <TouchableOpacity>
          <Text style={styles.start}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.stop}> Stop </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity>
          {/* <Text style={styles.button}> */}
          <AntDesign
            name="clockcircleo"
            size={24}
            onPress={() => {
              showPage("clock");
            }}
            color="black"
            style={styles.button}
          />
          {/* </Text> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <Text style={styles.button}>-</Text> */}
          <MaterialIcons
            name="timer"
            size={24}
            onPress={() => {
              showPage("timer");
            }}
            color="black"
            style={styles.buttonActive}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    fontFamily: "Roboto",
  },
  number: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  //   min: {
  //     color: "white",
  //     fontSize: 120,
  //     fontWeight: "bold",
  //   },
  //   time: {
  //     color: "red",
  //     fontSize: 120,
  //     fontWeight: "bold",
  //   },
  number2: {
    color: "gray",
    fontSize: 80,
    fontWeight: "bold",
  },
  small: {
    color: "white",
    fontSize: 25,
    padding: 20,
  },
  startStop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 70,
    // marginBottom: 150,
  },
  start: {
    color: "black",
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 1,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  stop: {
    color: "black",
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
  },
  buttonActive: {
    // color: "white",
    fontSize: 40,
    margin: 20,
    color: "black",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 90,
    backgroundColor: "#ccc",
    width: 60,
    height: 60,
    textAlign: "center",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 5,
    borderColor: "red",

    // paddingHorizontal: 30,
  },
  button: {
    // color: "white",
    fontSize: 40,
    margin: 20,
    color: "black",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 90,
    backgroundColor: "#ccc",
    width: 60,
    height: 60,
    backgroundColor: "#aa9",
    textAlign: "center",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    // paddingHorizontal: 30,
  },
});

export default Screen2;
