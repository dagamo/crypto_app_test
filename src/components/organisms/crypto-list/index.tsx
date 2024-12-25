import React, {useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ICryptoList} from './interface';
import {ITicker} from '@/interfaces/models/ticker';
import TickerCard from '@/components/molecules/ticker-card';
import CryptoSkeletonList from '../crypto-list-skeleton';
import HeaderCryptoList from '../header-crypto-list';
import {Text} from 'react-native-paper';

export default function CryptoList({
  data,
  onSearch,
  isLoading,
  getImage,
  onPressItem,
}: ICryptoList) {
  const renderCard = useCallback(
    ({item}: {item: ITicker}) => {
      return (
        <TickerCard info={item} getImage={getImage} onPressItem={onPressItem} />
      );
    },
    [getImage, onPressItem],
  );

  const renderHeader = useCallback(
    () => <HeaderCryptoList onSearch={onSearch} />,
    [onSearch],
  );
  return useMemo(
    () => (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          renderItem={renderCard}
          ListEmptyComponent={
            isLoading ? (
              CryptoSkeletonList
            ) : (
              <View style={styles.empty}>
                <Text variant="titleLarge">No results</Text>
              </View>
            )
          }
        />
      </View>
    ),
    [data, renderCard, renderHeader, isLoading],
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
