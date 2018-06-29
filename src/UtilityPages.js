import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
`;

const Text = styled.h1`
  font-size: 20px;
`;

const Return = styled(Link)`
  font-size: 18px;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Error404Page = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>Error 404</title>
    </Helmet>
    <Text>
      Error loading
      {`${location.pathname}${location.search}`}
    </Text>
  </React.Fragment>
);

export const DummyPage = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>{location.pathname}</title>
    </Helmet>
    <Container>
      <Text>
        This is a dummy stand-in for {`${location.pathname}${location.search}`}
      </Text>
      <Return to="/"> Go back </Return>
    </Container>
  </React.Fragment>
);
