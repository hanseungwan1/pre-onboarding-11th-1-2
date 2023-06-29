import { useEffect, useState } from 'react';
import { useRouter } from './useRouter';
import { getLocalStorageToken } from '../utils/auth';

interface useAuthRedirectionProps {
  to: string;
  isRedirectionIfAuth: boolean;
}

const useAuthRedirection = ({
  to,
  isRedirectionIfAuth,
}: useAuthRedirectionProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(!!getLocalStorageToken());

  const { replaceTo } = useRouter();

  useEffect(() => {
    if (getLocalStorageToken()) {
      setIsAuth(true);
      if (isRedirectionIfAuth) {
        replaceTo(to);
        return;
      }
    }
    setIsAuth(false);
    if (!isRedirectionIfAuth) {
      replaceTo(to);
    }
  }, [isRedirectionIfAuth, replaceTo, to]);
  return isAuth;
};

export default useAuthRedirection;
