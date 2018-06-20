import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StatBlock = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  min-width: 75px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  color: #707e88;
`;

const Amount = styled(Text)`
  font-size: 18px;
  color: #707e88;
`;

const StatLink = styled(NavLink)`
  padding-bottom: 8px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  width: 100%;

  &.active {
    border-bottom: 3px solid #1da1f2;

    ${Amount} {
      color: #1da1f2;
    }
  }

  &:hover {
    border-bottom: 3px solid #1da1f2;
    transition: all 0.1s ease-in-out;

    ${Amount} {
      color: #1da1f2;
    }
  }
`;

export default ({ link, text, count }) => (
  <StatBlock>
    <StatLink to={link} activeClassName="active" exact>
      <Text>{text}</Text>
      <Amount>{count}</Amount>
    </StatLink>
  </StatBlock>
);
