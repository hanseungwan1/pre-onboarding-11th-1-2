import React from 'react';
import useAuthRedirection from '../hooks/useAuthRedirection';
import PATH from '../utils/constants/path';

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  const isAuth = useAuthRedirection({
    to: PATH.SIGNIN,
    isRedirectionIfAuth: false,
  });

  if (!isAuth) {
    return <></>;
  }
  return <>{children}</>;
};

export default GeneralLayout;
