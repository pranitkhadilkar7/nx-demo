import { useSelector } from 'react-redux';
import { authState } from '../auth/auth-slice';
import { Header } from '@temp-workspace/header';

export function Home() {
  const { user } = useSelector(authState);
  return <Header text={`Welcome ${user.username}!!`} />;
}
