import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Profile from './Profile';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/EveryInteract" />
        <Route exact path="/EveryInteract" component={Profile} />
      </div>
    </BrowserRouter>
  );
}
