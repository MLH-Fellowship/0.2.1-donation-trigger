// Libraries
import React from "react";
import { render } from "react-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import * as serviceWorker from "./serviceWorker";

// Styles
import "./index.css";

// Component Imports
import App from "./App";

Amplify.configure(awsExports);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
