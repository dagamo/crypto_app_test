// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import TickerScreen from '@/screens/ticker';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';

const Stack = createNativeStackNavigator();

function TickerStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Tickers">
      <Stack.Screen
        name="Tickers"
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

export default TickerStackNavigator;
