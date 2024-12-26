import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IHomeTemplateChildren, IHomeTemplateProps} from './interface';
import WelcomeDialog from '../../../components/molecules/welcome-dialog';
import CryptoList from '../../../components/organisms/crypto-list';

const HomeTemplate: React.FC<IHomeTemplateProps> & IHomeTemplateChildren = ({
  username,
  children,
}) => {
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
        message={`Hi ${username}, explore the world of crypto with us!`}
        hideDialog={() => setShowWelcomeDialog(false)}
      />
      {children}
    </View>
  );
};

HomeTemplate.CrytpoList = CryptoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default HomeTemplate;
