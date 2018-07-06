import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Tab = styled.li`
  font-size: 18px;
  line-height: 20px;
  padding-right: 35px;
  font-weight: bold;
  color: black;
`;

const TabLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    border-bottom: 2px solid black;
  }

  &.active {
    color: #1da1f2;

    &:hover {
      border-bottom: 2px solid #1da1f2;
    }
  }
`;

export default ({ to, children }) => (
  <Tab>
    <TabLink to={to} exact>
      {children}
    </TabLink>
  </Tab>
);
