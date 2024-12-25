import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ICryptoList} from './interface';
import {ITicker} from '@/interfaces/models/ticker';
import TickerCard from '@/components/molecules/ticker-card';

export default function CryptoList({data}: ICryptoList) {
  const renderCard = useCallback(({item}: {item: ITicker}) => {
    return <TickerCard info={item} />;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
