import React from "react";
import styled from "styled-components";
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

export default ({ match }) => (
  <Container>
    <Text> This is a dummy stand-in for {match.url.slice(1)} page </Text>
    <Return to="/"> Go back </Return>
  </Container>
);
