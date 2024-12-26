import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {IHeaderCryptoListProps} from './interface';
import {Button, Searchbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

export default function HeaderCryptoList({onSearch}: IHeaderCryptoListProps) {
  const {t} = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeText = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const _onSearch = useCallback(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  const onClear = useCallback(() => {
    onSearch('');
  }, [onSearch]);

  return useMemo(() => {
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder={t('filter.placeholder')}
          onChangeText={onChangeText}
          value={searchQuery}
          style={styles.searchbar}
          clearButtonMode="never"
          keyboardType="default"
          onClearIconPress={onClear}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button mode="contained" onPress={_onSearch}>
              {t('filter.button')}
            </Button>
          </View>
        </View>
      </View>
    );
  }, [_onSearch, searchQuery, onChangeText, onClear, t]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 10,

    marginBottom: 30,
  },
  searchbar: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 200,
  },
});
