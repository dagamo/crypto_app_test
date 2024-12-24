/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/StackNavigator';
import {NotificationProvider} from './src/context/notification';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <NotificationProvider>
            <RootStack />
          </NotificationProvider>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
