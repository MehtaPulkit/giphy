import React from 'react';

interface ErrorComponentProps {
  children: React.ReactNode;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ children }) => {
  return (
    <p className="text-xl text-center text-red-500 mt-8">
      {children}
    </p>
  );
};

export default ErrorComponent;
