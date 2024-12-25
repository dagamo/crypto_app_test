import {useLogin} from '../../hooks/useLogin';
import LoginTemplate from '../../components/templates/login/Login';

export default function LoginScreen() {
  const {onSignIn} = useLogin();
  const onSubmit = async (username: string) => {
    onSignIn(username);
  };
  return <LoginTemplate onSubmit={onSubmit} />;
}
