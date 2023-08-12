import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/Home/Home';
import VersionComponent from '../Components/VersionComponent';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <React.Fragment>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>

      <VersionComponent />
    </React.Fragment>
  );
};

export default DrawerNavigator;
