import React from 'react';
import useAuthRedirection from '../hooks/useAuthRedirection';
import Path from '../utils/constants/path';

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  const isAuth = useAuthRedirection({
    to: Path.SIGNIN,
    isRedirectionIfAuth: false,
  });

  if (!isAuth) {
    return null;
  }
  return <>{children}</>;
};

export default GeneralLayout;
