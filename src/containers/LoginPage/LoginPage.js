import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./LoginPage.m.scss";

class LoginPage extends Component {
  render() {
    return <div className={styles.grid}>Login Page</div>;
  }
}

LoginPage.propTypes = {
  logIn: PropTypes.func
};

export default LoginPage;
