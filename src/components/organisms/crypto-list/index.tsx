import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export default function CryptoList() {
  return (
    <View style={styles.container}>
      <FlatList data={[2]} renderItem={({item}) => <Text>{item}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
