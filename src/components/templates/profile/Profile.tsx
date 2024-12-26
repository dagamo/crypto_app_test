import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import {IProfileTemplateProps} from './interface';
import {useTranslation} from 'react-i18next';

export default function ProfileTemplate({onSubmit}: IProfileTemplateProps) {
  const {t, i18n} = useTranslation();
  const [value, setValue] = React.useState(i18n.language);
  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={value => {
          i18n.changeLanguage(value);
          setValue(value);
        }}
        value={value}>
        <RadioButton.Item label={t('screens.profile.english')} value="en" />
        <RadioButton.Item label={t('screens.profile.spanish')} value="es" />
      </RadioButton.Group>
      <Button mode="contained" onPress={onSubmit}>
        {t('screens.profile.logout-button')}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    rowGap: 20,
  },
});
