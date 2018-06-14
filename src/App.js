import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import styled from "styled-components";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <section>
        <Route exact path="/" render={() => <Redirect to="EveryInteract " />} />
        <Header />
      </section>
    );
  }
}

export default App;
