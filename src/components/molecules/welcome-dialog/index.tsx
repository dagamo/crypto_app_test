import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {IWelcomeDialogProps} from './interface';

const WelcomeDialog = ({message, visible, hideDialog}: IWelcomeDialogProps) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>Welcome to Crypto App</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{message} </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Start</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default WelcomeDialog;
