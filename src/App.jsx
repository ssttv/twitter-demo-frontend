import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Account from "./Account/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={Account} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
