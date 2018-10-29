import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ render, component, ...rest }) => {
  const Component = render || component;
  return (
    <Route
      {...rest}
      render={props => {
        return rest.auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func,
  auth: PropTypes.bool
};

export default PrivateRoute;
