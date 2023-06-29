import React from 'react';
import useAuthRedirection from '../../hooks/useAuthRedirection';
import Path from '../../utils/constants/path';
const Signup = () => {
  const isAuth = useAuthRedirection({
    to: Path.TODO,
    isRedirectionIfAuth: true,
  });

  if (isAuth) {
    return <></>;
  }
  return <div>Signup</div>;
};

export default Signup;
