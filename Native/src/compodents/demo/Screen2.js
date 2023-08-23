import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Home from "./Home";
import Detail from "./Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Screen2 = (props) => {
  const { navigation } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
