import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import LoginForm from '../../organisms/login';
import {ITemplateProps} from './interface';
import {useTranslation} from 'react-i18next';

export default function LoginTemplate({onSubmit}: ITemplateProps) {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>{t('screens.login.title')}</Text>
        <LoginForm onSubmit={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    rowGap: 20,
    maxHeight: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
});
