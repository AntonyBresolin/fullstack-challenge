import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider.js';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { authToken } = useAuth();

  return authToken ? <Element {...rest} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;