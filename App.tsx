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
import HomeScreen from './screens/home';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <HomeScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
