/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useCrypto} from '@/hooks/useCrypto';
import HomeTemplate from '@/components/templates/home/Home';
import useUserStore from '@/state/user';
import React, {useCallback, useMemo} from 'react';
import cryptoImages from '@/utils/crypto.json';

function HomeScreen(): React.JSX.Element {
  const {username} = useUserStore();
  const [searchText, setSearchText] = React.useState('');
  const {isLoading, data} = useCrypto();

  const dataFiltered = useMemo(() => {
    if (searchText?.trim() === '') return data?.data;
    return data?.data.filter(item => {
      return parseFloat(item.percent_change_24h) >= parseFloat(searchText);
    });
  }, [data, searchText]);

  const getImage = useCallback((symbol: string) => {
    const imgURL = cryptoImages.find(item => item.symbol === symbol)?.icon;
    return imgURL;
  }, []);

  return (
    <HomeTemplate username={username}>
      <HomeTemplate.CrytpoList
        data={dataFiltered || []}
        isLoading={isLoading}
        getImage={getImage}
        onSearch={setSearchText}
      />
    </HomeTemplate>
  );
}

export default HomeScreen;
