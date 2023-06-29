import React from 'react';

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default GeneralLayout;
