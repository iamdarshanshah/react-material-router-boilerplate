import React from "react";
// import request from "superagent";
import PropTypes from 'prop-types';
import { instanceOf } from 'prop-types';
import { Route, Redirect } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';

class PrivateRoute extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route {...rest} render={(props) => (this.props.authenticated && !this.props.unauthorized ? <Component {...props} /> : <Redirect to="/register" />)} />
    )
  }
}


PrivateRoute.propTypes = {
  component: PropTypes.any,
}

export default withCookies(PrivateRoute);