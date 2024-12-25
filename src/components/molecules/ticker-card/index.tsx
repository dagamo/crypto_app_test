import * as React from 'react';
import {Avatar, Card, Text} from 'react-native-paper';
import {ITickerCardProps} from './interface';
import {StyleSheet, View} from 'react-native';
import {formatCurrencyUSD} from '@/utils/formatToCurrency';
import {formatToPercentage} from '@/utils/formatToPercentage';

const TickerCard = ({info}: ITickerCardProps) => {
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

  return (
    <Card.Title
      style={styles.card}
      title={info.symbol}
      subtitle={info.name}
      left={props => <Avatar.Icon {...props} icon="folder" />}
      right={renderRightComponent}
    />
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
