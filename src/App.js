import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Profile from "./Profile";
import { Error404Page, DummyPage } from "./UtilityPages";

export default function App() {
  return (
    <IntlProvider locale="en">
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Redirect exact from="/" to="/EveryInteract" />
            <Route exact path="/moments" component={DummyPage} />
            <Route exact path="/notifications" component={DummyPage} />
            <Route exact path="/messages" component={DummyPage} />
            <Route exact path="/about" component={DummyPage} />
            <Route exact path="/all_people" component={DummyPage} />
            <Route exact path="/view_all" component={DummyPage} />
            <Route exact path="/change" component={DummyPage} />
            <Route exact path="/support" component={DummyPage} />
            <Route exact path="/terms" component={DummyPage} />
            <Route exact path="/privacy_policy" component={DummyPage} />
            <Route exact path="/cookies" component={DummyPage} />
            <Route exact path="/ads" component={DummyPage} />
            <Route exact path="/search" component={DummyPage} />
            <Route path="/:userId" component={Profile} />
            <Route component={Error404Page} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </IntlProvider>
  );
}
