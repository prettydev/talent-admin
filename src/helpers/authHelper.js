import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser, setCurrentUser } from './Utils';
import { isAuthGuardActive, currentUser } from '../constants/defaultValues';

const ProtectedRoute = ({
  component: Component,
  roles = undefined,
  ...rest
}) => {
  const { user, isLoading } = useAuth0();
  const setComponent = (props) => {
    if (isAuthGuardActive && !isLoading) {
      let currentUser = getCurrentUser(user);
      if (!currentUser && currentUser?.email != user.email) {
        setCurrentUser(user);
        currentUser = { ...user };
      }
      if (currentUser) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/user/login',
            state: { from: props.location },
          }}
        />
      );
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={setComponent} />;
};
const UserRole = {
  Admin: 0,
  Editor: 1,
};

export { ProtectedRoute, UserRole };
