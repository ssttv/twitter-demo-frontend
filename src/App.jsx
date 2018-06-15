import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Content from "./Account/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={Content} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
