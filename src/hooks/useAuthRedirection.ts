import { useEffect, useState } from 'react';
import { useRouter } from './useRouter';
import { getLocalStorageToken } from '../utils/auth';
import PATH from '../utils/constants/path';

interface useAuthRedirectionProps {
  to: PATH;
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
        // 토큰이 있으면 다른 페이지로 이동
        replaceTo(to);
      }
      return;
    }
    setIsAuth(false);
    if (!isRedirectionIfAuth) {
      // 토큰이 없으면 다른 페이지로 이동
      replaceTo(to);
    }
  }, [isRedirectionIfAuth, replaceTo, to]);
  return isAuth;
};

export default useAuthRedirection;
