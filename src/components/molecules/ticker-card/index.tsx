import * as React from 'react';
import {Avatar, Card, Text} from 'react-native-paper';
import {ITickerCardProps} from './interface';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {formatCurrencyUSD} from '@/utils/formatToCurrency';
import {formatToPercentage} from '@/utils/formatToPercentage';
import {truncateText} from '@/utils/truncateText';

const TickerCard = ({info, getImage, onPressItem}: ITickerCardProps) => {
  const colorStyle = React.useMemo(() => {
    return parseFloat(info.percent_change_24h) > 0
      ? styles.percent_change_24h_green
      : styles.percent_change_24h_red;
  }, [info.percent_change_24h]);

  const renderRightComponent = React.useCallback(
    () => (
      <View style={styles.valuesContainer}>
        <Text style={styles.price_usd}>
          {formatCurrencyUSD(info.price_usd)}
        </Text>
        <Text style={colorStyle}>
          {formatToPercentage(info.percent_change_24h)}
        </Text>
      </View>
    ),
    [info.price_usd, info.percent_change_24h, colorStyle],
  );

  const renderLeftComponent = React.useCallback(() => {
    const image = getImage(info.symbol);
    if (image) {
      return (
        <Avatar.Image
          size={50}
          source={{
            uri: getImage(info.symbol),
          }}
        />
      );
    }
    return <Avatar.Text size={50} label={truncateText(info.symbol, 2)} />;
  }, [getImage, info.symbol]);

  const onPressCard = React.useCallback(() => {
    onPressItem(info);
  }, [onPressItem, info]);

  return (
    <TouchableOpacity onPress={onPressCard}>
      <Card.Title
        style={styles.card}
        title={info.symbol}
        subtitle={info.name}
        left={renderLeftComponent}
        right={renderRightComponent}
      />
    </TouchableOpacity>
  );
};

export default TickerCard;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 5,
  },
  valuesContainer: {
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  price_usd: {
    fontWeight: 'bold',
  },
  percent_change_24h_green: {
    color: 'green',
  },
  percent_change_24h_red: {
    color: 'red',
  },
});
