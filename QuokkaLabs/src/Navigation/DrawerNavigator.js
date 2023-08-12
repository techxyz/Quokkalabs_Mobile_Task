import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home/Home';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false
      }}>
    <Drawer.Screen name="Home" component={Home} />
   
  </Drawer.Navigator>
  )
}







export default DrawerNavigator