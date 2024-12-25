/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import HomeTemplate from '../../components/templates/home/Home';
import useUserStore from '../../state/user';
import React from 'react';

function HomeScreen(): React.JSX.Element {
  const {username} = useUserStore();

  return <HomeTemplate username={username} />;
}

export default HomeScreen;
