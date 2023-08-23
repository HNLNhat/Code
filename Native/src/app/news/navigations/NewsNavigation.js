import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home2 from '../screens/Home2';
import Detail from '../screens/Detail'
import Add from '../screens/Add';

const Tab = createBottomTabNavigator();

const NewsNavigation = () => {
  return (
 <Tab.Navigator>
    <Tab.Screen name="Home2" component={Home2}/>
    <Tab.Screen name="Detail" component={Detail}/>
    <Tab.Screen name="Add" component={Add}/>
 </Tab.Navigator>
  )
}

export default NewsNavigation;