import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IHomeTemplateProps} from './interface';
import WelcomeDialog from '../../../components/molecules/welcome-dialog';
import CryptoList from '../../../components/organisms/crypto-list';

export default function HomeTemplate({username}: IHomeTemplateProps) {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  useEffect(() => {
    if (!username) {
      return;
    }
    setShowWelcomeDialog(true);
  }, [username]);
  return (
    <View style={styles.container}>
      <WelcomeDialog
        visible={showWelcomeDialog}
        message={`Hi ${username}, welcome to Crypto App`}
        hideDialog={() => setShowWelcomeDialog(false)}
      />
      <View style={styles.cryptoSection}>
        <CryptoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cryptoSection: {
    flex: 1,
    width: '100%',
  },
});
