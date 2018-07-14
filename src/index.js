// @flow
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<App />, root);
  registerServiceWorker();
}
