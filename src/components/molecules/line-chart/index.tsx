import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LineChart} from 'react-native-chart-kit';
import {Text, useTheme} from 'react-native-paper';
import {ILineChartProps} from './interface';
const LineChartComponent = ({data}: ILineChartProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {data.length ? (
        <LineChart
          data={{
            labels: Array(data.length).fill(''),
            datasets: [
              {
                data,
                strokeWidth: 2,
              },
            ],
          }}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: theme.colors.primary,
            backgroundGradientFrom: theme.colors.primary,
            backgroundGradientTo: theme.colors.primary,
            decimalPlaces: 2, // Número de decimales
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
          withVerticalLabels={false}
        />
      ) : (
        <Text>No data to Show</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
