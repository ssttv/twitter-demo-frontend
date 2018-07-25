// @flow
import React from "react";
import ReactDOM from "react-dom";
// add Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./complexes/reducers";

import "normalize.css";
import "flexboxgrid2";
// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(store.getState);
const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
  registerServiceWorker();
}
