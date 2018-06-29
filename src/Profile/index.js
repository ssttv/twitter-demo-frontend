import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Content from "./Content";

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Profile Page / Desktop</title>
    </Helmet>
    <Header />
    <main>
      <Content />
    </main>
  </React.Fragment>
);
