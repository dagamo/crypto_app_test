/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import TickerTemplate from '@/components/templates/ticker/Ticker';
import {useCryptoById} from '@/hooks/useCryptoById';
import useTickerStore from '@/state/ticker';
import React, {useEffect} from 'react';
import {View} from 'react-native';

function TickerScreen(): React.JSX.Element {
  const {selected, pricesData, clearPrices} = useTickerStore();
  const {isLoading, timer} = useCryptoById(selected?.id);
  useEffect(() => {
    return () => {
      clearPrices();
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <TickerTemplate isLoading={isLoading} timer={timer}>
        <TickerTemplate.LineChart data={pricesData} />
      </TickerTemplate>
    </View>
  );
}

export default TickerScreen;
