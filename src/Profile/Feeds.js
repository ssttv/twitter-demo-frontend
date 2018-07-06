import React from "react";
import { Route } from "react-router-dom";
import Tweets from "./Tweets";
import Tabs from "./Tweets/Tabs";

export default ({ match }) => (
  <React.Fragment>
    <Tabs />
    <Route exact path={`${match.url}`} component={Tweets} />
    <Route
      exact
      path={`${match.url}/with-replies`}
      render={() => <h2> Tweets With Replies </h2>}
    />
    <Route exact path={`${match.url}/media`} render={() => <h2> Media </h2>} />
  </React.Fragment>
);
