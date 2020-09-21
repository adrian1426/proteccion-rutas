import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAutenticated, component: Component, ...resto }) => {

  localStorage.setItem('lastPath', resto.location.pathname);

  return (
    <Route
      {...resto}
      component={props => (
        isAutenticated ? <Component {...props} /> : <Redirect to="/login" />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRoute;