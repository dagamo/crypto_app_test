// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './../screens/login/index';
import HomeScreen from '../screens/home';
import InitScreen from '../screens/init';
import TickerScreen from '@/screens/ticker';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Init">
      <Stack.Screen
        name="Init"
        component={InitScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ticker"
        component={TickerScreen}
        options={{
          headerShown: true,
          header: props => {
            return (
              <View>
                <IconButton
                  icon="arrow-left"
                  onPress={() => props.navigation.goBack()}
                />
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
