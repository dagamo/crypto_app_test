import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TickerStackNavigator from './TickerStackNavigator';
import {Icon} from 'react-native-paper';
import ProfileScreen from '@/screens/profile';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          padding: 0,
          height: 60,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        key={'Home'}
        name={t('bottom-tab.home')}
        component={TickerStackNavigator}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon source={'home'} size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        key={'Profile'}
        name={t('bottom-tab.profile')}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon source={'account'} size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
