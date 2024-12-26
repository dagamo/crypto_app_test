import LineChartComponent from '@/components/molecules/line-chart';
import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {ITickerTemplateChildren, ITickerTemplateProps} from './interface';
import {Avatar, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

const TickerTemplate: React.FC<ITickerTemplateChildren> &
  ITickerTemplateProps = ({children, timer, getImage}) => {
  const {t} = useTranslation();
  return useMemo(
    () => (
      <View style={styles.container}>
        <Avatar.Image
          size={150}
          source={{
            uri: getImage(),
          }}></Avatar.Image>
        <View style={styles.textContainer}>
          <Text style={styles.text_bold} variant="titleLarge">
            {t('screens.ticker.timer')}
          </Text>
          <Text variant="titleLarge">{timer}</Text>
        </View>
        {children}
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timer],
  );
};
TickerTemplate.LineChart = LineChartComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    rowGap: 20,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text_bold: {
    fontWeight: 'bold',
  },
});

export default TickerTemplate;
