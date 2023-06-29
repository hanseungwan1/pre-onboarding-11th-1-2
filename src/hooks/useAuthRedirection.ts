import { useEffect, useState } from 'react';
import { useRouter } from './useRouter';

interface useAuthRedirectionProps {
  to: string;
  isRedirectionIfAuth: boolean;
}

const useAuthRedirection = ({
  to,
  isRedirectionIfAuth,
}: useAuthRedirectionProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false); // TODO: !!localStoreage.get('token)

  const { replaceTo } = useRouter();

  useEffect(() => {
    // if(getLocalStoreageToken()){// TODO: !!localStoreage.get('token)
    setIsAuth(true);
    if (isRedirectionIfAuth) {
      replaceTo(to);
      return;
    }
    // }
    setIsAuth(false);
    if (!isRedirectionIfAuth) {
      replaceTo(to);
    }
  }, [isRedirectionIfAuth, replaceTo, to]);
  return isAuth;
};

export default useAuthRedirection;
