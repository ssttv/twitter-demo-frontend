// @flow
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Crumb = styled.li`
  cursor: pointer;
`;

const CrumbLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #667580;
  text-decoration: none;
  padding-bottom: 4px;
  padding-top: 4px;
  min-height: 28px;

  &.active {
    border-bottom: 2px solid #1da1f2;
  }

  &:hover {
    border-bottom: 2px solid #1da1f2;
    transition: all 0.1s ease-in-out;
  }
`;

const Icon = styled.img``;

const Text = styled.span`
  padding-left: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
`;

type Props = {
  to: string,
  src: string,
  alt: ?string
};

export default ({ to, src, alt }: Props) => (
  <Crumb>
    <CrumbLink to={to} exact>
      <Icon src={src} alt={alt} />
      <Text>Home</Text>
    </CrumbLink>
  </Crumb>
);
