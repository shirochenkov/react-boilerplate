import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import PrivatePage from "containers/PrivatePage";
import LoginPage from "containers/LoginPage";

import PrivateRoute from "components/PrivateRoute";

import actions from "model/actions";
import selectors from "model/selectors";

@withRouter
@connect(
  // mapStateToProps function - passes data from store's state.
  state => {
    return {
      loggedIn: selectors.user.loggedIn(state)
    };
  },
  // mapDispatchToProps object - pass individual action creators here
  {
    appReady: actions.app.appReady
  }
)
class App extends Component {
  componentDidMount() {
    // telling redux we're ready for operation
    this.props.appReady();
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <Switch>
        <Route
          path="/auth/login"
          render={() => (loggedIn ? <Redirect to={`/`} /> : <LoginPage />)}
        />
        <PrivateRoute
          auth={loggedIn}
          path="*"
          render={() => <PrivatePage loggedIn={loggedIn} />}
        />
      </Switch>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  appReady: PropTypes.func
};

export default App;
