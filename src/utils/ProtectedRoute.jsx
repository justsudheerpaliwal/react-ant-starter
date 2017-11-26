import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem(ACCESS_TOKEN);
  console.log('let us see', ACCESS_TOKEN);
  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/input-number',
            state: { from: props.location },
          }}
          />
        )
      )}
    />);
}
