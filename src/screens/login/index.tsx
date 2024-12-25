import {useLogin} from '../../hooks/useLogin';
import LoginTemplate from './../../components/templates/Login';

export default function LoginScreen() {
  const {onSignIn} = useLogin();
  const onSubmit = async (username: string) => {
    console.log('* here 1');
    onSignIn(username);
  };
  return <LoginTemplate onSubmit={onSubmit} />;
}
