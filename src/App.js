import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Profile from "./Profile";
import { Error404, Dummy, GenericError } from "./UtilityPages";
import Header from "./Header";

export default function App() {
  return (
    <IntlProvider locale="en">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/EveryInteract" />
            <Route exact path="/moments" component={Dummy} />
            <Route exact path="/notifications" component={Dummy} />
            <Route exact path="/messages" component={Dummy} />
            <Route exact path="/about" component={Dummy} />
            <Route exact path="/all_people" component={Dummy} />
            <Route exact path="/view_all" component={Dummy} />
            <Route exact path="/change" component={Dummy} />
            <Route exact path="/support" component={Dummy} />
            <Route exact path="/terms" component={Dummy} />
            <Route exact path="/privacy_policy" component={Dummy} />
            <Route exact path="/cookies" component={Dummy} />
            <Route exact path="/ads" component={Dummy} />
            <Route exact path="/search" component={Dummy} />
            <Route exact path="/error" component={GenericError} />
            <Route path="/:user" component={Profile} />
            <Route component={Error404} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </IntlProvider>
  );
}
