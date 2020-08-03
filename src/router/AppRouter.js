import React from "react";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { BrowserRouter, Route } from 'react-router-dom';

import PrivateRoute from "./PrivateRoute";

import Register from "../modules/Register/Register";
import VoteApp from "../modules/VoteApp/Home";
import AppBar from "../modules/common/AppBar";

class AppRouter extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      unauthorized: false
    }
  }

  componentDidMount() {
    // On reaching the landing page, user profile is fetched and in case it fails, then is redirected back to login
  }

  isAuthenticated = () => {
    return true;
  }

  render() {
    {/* Use PrivateRoute for routes with components requiring user to be authentication */ }
    return (
      <>
        <AppBar unauthorized={this.state.unauthorized} authenticated={this.isAuthenticated()}></AppBar>
        <BrowserRouter>
          <PrivateRoute unauthorized={this.state.unauthorized} authenticated={this.isAuthenticated()} exact path="/" component={VoteApp} />
          <Route path="/register" component={Register} />
          <PrivateRoute unauthorized={this.state.unauthorized} authenticated={this.isAuthenticated()} path="/home" component={VoteApp} />
        </BrowserRouter>
      </>
    )
  }
}

export default withCookies(AppRouter);
