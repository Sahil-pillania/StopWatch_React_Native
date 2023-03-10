import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import * as SplashScreen from "expo-splash-screen";

const Screen1 = ({ navigation }) => {
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [time, setTime] = useState("PM");

  const showPage = (page) => {
    console.log(page);
    navigation.navigate(page);
  };

  const getHour = () => {
    const hour = new Date().getHours();

    hour > 9 ? setHour(hour) : setHour("0" + hour);
    if (hour == 24) {
      setHour("00");
      // setHour(hour);
    }
  };

  const getMinute = () => {
    const minute = new Date().getMinutes();
    minute > 9 ? setMin(minute) : setMin("0" + minute);
    // setMin(minute);
  };
  const getSecond = () => {
    const second = new Date().getSeconds();
    second > 9 ? setSec(second) : setSec("0" + second);
    // setSec(second);
  };
  const getTime = () => {
    const date = new Date();
    const time = date.getHours() >= 12 ? "PM" : "AM";
    // console.log(time);
    setTime(time);
  };

  useEffect(() => {
    // async function prepare() {
    //   await SplashScreen.preventAutoHideAsync();
    // }
    // // prepare();
    getHour();
    getMinute();
    getSecond();
    getTime();
  }, []);

  setInterval(() => {
    getHour();
    getMinute();
    getSecond();
    getTime();
  }, 1000);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Text style={styles.hour}>{hour}</Text>
      <Text style={styles.min}>{min}</Text>
      <Text style={styles.sec}>{sec}</Text>
      <Text style={styles.time}>{time}</Text>

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
            style={styles.buttonActive}
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
            style={styles.button}
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
  hour: {
    color: "white",
    fontSize: 120,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  min: {
    color: "white",
    fontSize: 120,
    fontWeight: "bold",
  },
  time: {
    color: "red",
    fontSize: 120,
    fontWeight: "bold",
  },
  sec: {
    color: "gray",
    fontSize: 120,
    fontWeight: "bold",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // position: "absolute",
    // bottom: 0,
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

export default Screen1;
