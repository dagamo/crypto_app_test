/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useCrypto} from '@/hooks/useCrypto';
import HomeTemplate from '@/components/templates/home/Home';
import useUserStore from '@/state/user';
import React from 'react';

function HomeScreen(): React.JSX.Element {
  const {username} = useUserStore();
  const {isError, isLoading, data} = useCrypto();

  return (
    <HomeTemplate username={username}>
      <HomeTemplate.CrytpoList data={data?.data || []} />
    </HomeTemplate>
  );
}

export default HomeScreen;
