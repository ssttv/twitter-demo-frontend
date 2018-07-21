// @flow
import React from "react";
import ReactDOM from "react-dom";
// add Redux
import { Provider } from "react-redux";
import initStore from "./store";
import "normalize.css";
import "flexboxgrid2";
// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root");
const store = initStore();

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
  registerServiceWorker();
}
