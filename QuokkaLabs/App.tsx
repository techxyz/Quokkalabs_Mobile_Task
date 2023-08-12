// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login/LoginScreen';
import SignUP from './src/Screens/SignUp/SignUp';
import Home from './src/Screens/Home/Home';
import DrawerNavigator from './src/Navigation/DrawerNavigator';
import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers';



const Stack = createNativeStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="SignUP" component={SignUP} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;