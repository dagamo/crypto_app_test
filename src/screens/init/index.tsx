import React from 'react';
import {Text} from 'react-native-paper';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/interfaces/root-stack-navigator-type';
import {validateSignIn} from '../../utils/validateSignIn';
import useUserStore from '../../state/user';

export default function InitScreen() {
  const {username} = useUserStore();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    validateSignIn(username, navigation);
  }, []);

  return (
    <>
      <Text>Loading</Text>
    </>
  );
}
