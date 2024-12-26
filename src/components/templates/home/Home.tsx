import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IHomeTemplateChildren, IHomeTemplateProps} from './interface';
import WelcomeDialog from '../../../components/molecules/welcome-dialog';
import CryptoList from '../../../components/organisms/crypto-list';
import {useTranslation} from 'react-i18next';

const HomeTemplate: React.FC<IHomeTemplateProps> & IHomeTemplateChildren = ({
  username,
  children,
  isFirstTime,
  onHideWelcomeDialog,
}) => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const {t} = useTranslation();
  useEffect(() => {
    if (!username || !isFirstTime) {
      return;
    }
    setShowWelcomeDialog(true);
  }, [username, isFirstTime]);

  return (
    <View style={styles.container}>
      <WelcomeDialog
        visible={showWelcomeDialog}
        message={t('welcomen-dialog.message').replace('[TEXT]', username)}
        hideDialog={() => {
          setShowWelcomeDialog(false);
          onHideWelcomeDialog && onHideWelcomeDialog();
        }}
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
