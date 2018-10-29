import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Main from "containers/Main";

import styles from "./PrivatePage.m.scss";

@withRouter
class PrivatePage extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.content}>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default PrivatePage;
