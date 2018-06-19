import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Content from "./Content";

export default () => (
  // <div></div> здесь служит закрывающим тегом для хедера и хелмета
  <div>
    <Helmet>
      <title>Profile Page / Desktop</title>
    </Helmet>
    <Header />
    <main>
      <Content />
    </main>
  </div>
);
