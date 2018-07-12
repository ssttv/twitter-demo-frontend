// @flow
import React from "react";
import { Route } from "react-router-dom";
import Posts from "./Posts";
import Tabs from "./Posts/Tabs";

export default ({ match }) => (
  <React.Fragment>
    <Tabs />
    <Route exact path={`${match.url}`} component={Posts} />
    <Route
      exact
      path={`${match.url}/with-replies`}
      render={() => <h2> Tweets With Replies </h2>}
    />
    <Route exact path={`${match.url}/media`} render={() => <h2> Media </h2>} />
  </React.Fragment>
);
