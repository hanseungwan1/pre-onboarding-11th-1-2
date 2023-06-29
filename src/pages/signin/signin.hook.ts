import { signin } from '../../apis/auth';
import { setLocalStorageToken } from '../../utils/auth';

export const checkEmail = (email: string) => {
  return email.indexOf('@') === -1 ? 'fail' : 'success';
};

export const checkPassword = (password: string) => {
  return password.length < 8 ? 'fail' : 'success';
};
export const checkSignin = async (email: string, password: string) => {
  const response = await signin(email, password);
  setLocalStorageToken(response.data.access_token);
  // navigate('/todo');
};
