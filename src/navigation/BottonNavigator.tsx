import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TickerStackNavigator from './TickerStackNavigator';
import {Icon} from 'react-native-paper';
import ProfileScreen from '@/screens/profile';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string | undefined;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          return <Icon source={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          padding: 0,
          height: 60,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={TickerStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
