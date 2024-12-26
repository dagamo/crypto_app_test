import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {IProfileTemplateProps} from './interface';

export default function ProfileTemplate({onSubmit}: IProfileTemplateProps) {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={onSubmit}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
});
