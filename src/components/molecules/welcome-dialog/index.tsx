import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {IWelcomeDialogProps} from './interface';
import {useTranslation} from 'react-i18next';

const WelcomeDialog = ({message, visible, hideDialog}: IWelcomeDialogProps) => {
  const {t} = useTranslation();
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
            }}
            style={styles.icon}
          />
        </View>
        <Dialog.Title style={styles.title}>
          {t('welcomen-dialog.title')}
        </Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{message} </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>
            {t('welcomen-dialog.actions.start')}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

export default WelcomeDialog;
