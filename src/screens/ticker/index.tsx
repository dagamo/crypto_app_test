/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useCryptoById} from '@/hooks/useCryptoById';
import useTickerStore from '@/state/ticker';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

function TickerScreen(): React.JSX.Element {
  const {selected} = useTickerStore();
  console.log('* id', selected?.id);
  const {data, isLoading} = useCryptoById(selected?.id);
  return (
    <View>
      <Text>Ticker</Text>
    </View>
  );
}

export default TickerScreen;
