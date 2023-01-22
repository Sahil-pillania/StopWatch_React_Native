// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Screen1 from "./Views/Screen1";
import MainScreen from "./Views/MainScreen";
import { useState } from "react";
import Screen2 from "./Views/Screen2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [active, setActive] = useState(false);
  const Stack = createNativeStackNavigator();

  setTimeout(() => {
    setActive(true);
  }, 2000);

  {
    /* <StatusBar style="light" /> */
  }
  {
    /* {active ? <Screen1 /> : <MainScreen />} */
  }
  {
    /* <Screen2 /> */
  }
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="clock">
        <Stack.Screen
          name="clock"
          component={Screen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="timer"
          component={Screen2}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
