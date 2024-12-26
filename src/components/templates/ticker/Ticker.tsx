import LineChartComponent from '@/components/molecules/line-chart';
import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {ITickerTemplateChildren, ITickerTemplateProps} from './interface';
import {Text} from 'react-native-paper';

const TickerTemplate: React.FC<ITickerTemplateChildren> &
  ITickerTemplateProps = ({children, timer}) => {
  return useMemo(
    () => (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 20, color: 'red'}}>Timer: {timer}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default TickerTemplate;
