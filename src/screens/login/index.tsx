import {useLogin} from '../../hooks/useLogin';
import LoginTemplate from '../../components/templates/login/Login';
import useUserStore from '@/state/user';

export default function LoginScreen() {
  const {onSignIn} = useLogin();
  const {setIsFirstTime} = useUserStore();
  const onSubmit = async (username: string) => {
    onSignIn(username);
    setIsFirstTime(true);
  };
  return <LoginTemplate onSubmit={onSubmit} />;
}
