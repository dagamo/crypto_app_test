import {RootStackParamList} from '@/interfaces/root-stack-navigator-type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const validateSignIn = (
  username: string,
  router: NativeStackNavigationProp<RootStackParamList>,
) => {
  if (!username) {
    return router.replace('Login');
  }
  if (username) {
    return router.replace('Home');
  }
};
