import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
