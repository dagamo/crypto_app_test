import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {IHeaderCryptoListProps} from './interface';
import {Button, Searchbar} from 'react-native-paper';

export default function HeaderCryptoList({onSearch}: IHeaderCryptoListProps) {
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
          placeholder={'Search crypto by 24 %'}
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
              Filter
            </Button>
          </View>
        </View>
      </View>
    );
  }, [_onSearch, searchQuery, onChangeText]);
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
