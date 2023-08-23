import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Login';
import Register from './Register';
const Stack = createNativeStackNavigator();

const Screen1 = (props) => {
  const {navigation} = props;
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name ="Login" component={Login}/>
      <Stack.Screen name ="Register" component={Register}/>
    </Stack.Navigator>

    /*<View>
      <Text style={{fontSize: 30}}>Screen1</Text>
      <Button title="Go to Screen2" 
       onPress={() => navigation.navigate('Screen2', {hoTen: 'Lê Nam'})}/>
    </View>*/
  )
}

export default Screen1

const styles = StyleSheet.create({})