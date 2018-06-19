import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Interface from "./Interface";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/EveryInteract" />
        <Route exact path="/EveryInteract" component={Interface} />
      </div>
    </BrowserRouter>
  );
}
