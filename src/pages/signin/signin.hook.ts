import { signin } from '../../apis/auth';
import { setLocalStorageToken } from '../../utils/auth';

export const checkSignin = async (email: string, password: string) => {
  try {
    const response = await signin(email, password);

    if (response.status === 200) {
      setLocalStorageToken(response.data.access_token);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
