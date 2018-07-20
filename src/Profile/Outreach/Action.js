// @flow
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

const Dot = styled.small`
  margin: 0 5px 0 5px;
`;

type Props = {
  to: string,
  text: string
};

export default ({ to, text }: Props) => (
  <React.Fragment>
    <Dot>·</Dot>
    <Action to={to}>{text}</Action>
  </React.Fragment>
);
