import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "typeface-roboto";
import "material-design-icons";
import themes from "./themes";

import store from "./model/store";
import "./index.css";
import App from "containers/App";
// import * as serviceWorker from "./serviceWorker";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={themes.defaultTheme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
