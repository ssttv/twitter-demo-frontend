import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default () => (
  <div>
    <Helmet>
      <title>Profile Page / Desktop</title>
    </Helmet>
    <Header />
    <main>
      <Main />
    </main>
  </div>
);
