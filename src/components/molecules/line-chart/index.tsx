import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useTheme} from 'react-native-paper';
import {ILineChartProps} from './interface';
import {Dimensions} from 'react-native';
import {formatCurrencyUSD} from '@/utils/formatToCurrency';
import SkeletonChartLoader from '../line-chart-skeleton';

const {width} = Dimensions.get('window');

const LineChartComponent = ({data}: ILineChartProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {data.length ? (
        <LineChart
          data={{
            labels: data.map(item => item.time),
            datasets: [
              {
                data: data.map(item => item.price),
                strokeWidth: 2,
              },
            ],
          }}
          width={width}
          height={220}
          formatXLabel={xLabel => {
            return xLabel;
          }}
          formatYLabel={xLabel => {
            return formatCurrencyUSD(xLabel);
          }}
          bezier
          yLabelsOffset={-1}
          chartConfig={{
            backgroundColor: theme.colors.primary,
            backgroundGradientFrom: theme.colors.primary,
            backgroundGradientTo: theme.colors.primary,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: theme.colors.secondary,
            },
          }}
          withDots={true}
          withVerticalLabels={true}
        />
      ) : (
        <SkeletonChartLoader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    height: 200,
    width: '100%',
  },
  timerContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 16,
    color: 'black',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  overlayText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default LineChartComponent;
