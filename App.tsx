/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import '@/localization/i18n';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/StackNavigator';
import {NotificationProvider} from './src/context/notification';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {persistQueryClient} from '@tanstack/react-query-persist-client';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });
  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
  });

  persistQueryClient({
    queryClient,
    persister: asyncStoragePersister,
    maxAge: 1000 * 60 * 60 * 24, // Optional - Default: 7 days
  });

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <NotificationProvider>
              <RootStack />
            </NotificationProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
