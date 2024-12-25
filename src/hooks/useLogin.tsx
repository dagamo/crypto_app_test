import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useUserStore from '../state/user';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../interfaces/root-stack-navigator-type';

export const useLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {setUsername} = useUserStore();
  const onSignIn = (username: string) => {
    console.log('* username', username);
    setUsername(username);
    navigation.navigate('Home');
  };
  return {
    onSignIn,
  };
};
