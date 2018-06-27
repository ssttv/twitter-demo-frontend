import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Profile from './Profile';
import urlDummy from './urlDummy';
import { pages } from './urlDictionary';

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          {pages.map(page => (
            <Route
              key={page.id}
              exact
              path={`${page.to}`}
              component={urlDummy}
            />
          ))}
          <Route path="/:handle" component={Profile} />
          <Redirect exact from="/" to="/EveryInteract" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}
