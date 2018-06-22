import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Action = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Dotted = styled.small`
  margin: 0 5px 0 5px;
`;

export default ({ to, text }) => (
  <React.Fragment>
    <Dotted>·</Dotted>
    <Action to={to}>{text}</Action>
  </React.Fragment>
);
