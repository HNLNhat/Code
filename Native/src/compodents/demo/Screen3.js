import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Detail from "./Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Screen3 = (props) => {
  const { navigation } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Screen3;

const styles = StyleSheet.create({});
