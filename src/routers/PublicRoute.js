import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAutenticated, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={props => (
        !isAutenticated ? <Component {...props} /> : <Redirect to="/" />
      )}
    />
  );
};

PublicRoute.propTypes = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PublicRoute;