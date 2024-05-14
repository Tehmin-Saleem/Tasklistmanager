import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authStore from './GlobalStateManagement/globalStore';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!authStore.isAuthenticated) {
          return <Redirect to="/login" />;
        }

        // Optional: Check roles if provided
        if (roles && !roles.includes(authStore.user.role)) {
          return <Redirect to="/" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
