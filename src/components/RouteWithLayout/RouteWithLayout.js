import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Login } from "../../container";
import { Minimal } from "../../layout";
var jwtDecode = require("jwt-decode");

const RouteWithLayout = (props) => {
  const {
    layout: Layout,
    token,
    setToken,
    component: Component,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        token != null ? (
          <Layout>
            <Component token={token} {...matchProps} />
          </Layout>
        ) : (
          <Minimal>
            <Login setToken={setToken} />
          </Minimal>
        )
      }
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
