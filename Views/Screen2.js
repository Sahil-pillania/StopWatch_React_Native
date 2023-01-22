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

const Screen2 = ({ navigation }) => {
  const [hour, setHour] = useState("0");
  const [min, setMin] = useState("0");
  const [sec, setSec] = useState("0");
  const [interv, setInterv] = useState();
  const [timerStart, setTimerStart] = useState(0);
  const [stopped, setStopped] = useState(0);

  let currSec = sec;
  let currMin = min;
  let currHour = hour;

  const showPage = (page) => {
    console.log(page);
    navigation.navigate(page);
  };

  const updateTimer = () => {
    currSec++;

    if (currSec == 60) {
      currSec = 0;
      currMin++;
    }
    if (currMin == 60) {
      currMin = 0;
      currSec = 0;
      currHour++;
    }

    setHour(currHour), setMin(currMin), setSec(currSec);
  };

  const startTimer = () => {
    setTimerStart(1);
    setStopped(0);
    updateTimer();
    // console.log("Start timer");
    setInterv(
      setInterval(() => {
        updateTimer();
      }, 1000)
    );
  };
  const stopTimer = () => {
    setStopped(1);
    clearInterval(interv);
  };
  const resetTimer = () => {
    setTimerStart(0);
    stopTimer();
    setHour("0"), setMin("0"), setSec("0");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Text style={styles.number}>
        {currHour > 9 ? hour : "0" + currHour}
        <Text style={styles.small}>Hr</Text>
      </Text>
      <Text style={styles.number}>
        {currMin > 9 ? currMin : "0" + currMin}
        <Text style={styles.small}>Min</Text>
      </Text>
      <Text style={styles.number2}>
        {currSec > 9 ? currSec : "0" + currSec}
        <Text style={styles.small}>Sec</Text>
      </Text>
      {timerStart == 0 ? (
        <View style={styles.startStop}>
          <TouchableOpacity onPress={() => startTimer()}>
            <Text style={styles.start}>Start</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => stopTimer()}>
            <Text style={styles.stop}> Stop </Text>
          </TouchableOpacity> */}
        </View>
      ) : (
        <View style={styles.startStop}>
          <TouchableOpacity onPress={() => resetTimer()}>
            <Text style={styles.reset}>Reset</Text>
          </TouchableOpacity>
          {stopped == 0 ? (
            <TouchableOpacity onPress={() => stopTimer()}>
              <Text style={styles.stop}> Stop </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => startTimer()}>
              <Text style={styles.stop}> Continue </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

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
    color: "red",
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
    borderRadius: 15,
  },
  reset: {
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
    backgroundColor: "#fff",
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
