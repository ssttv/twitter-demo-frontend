import React, { Component } from "react";
import styled from "styled-components";
import Link from "react-router";
import NavLink from "react-router";

export const SolidButton = styled.button`
background-color: #1da1f2;
border: none;
font-family: Roboto;
font-weight: bold;
text-align: center;
font-size 14px;
letter-spacing: 0.01px;
color: #fff;
padding: 9px 8px;
`;
export const Navigation = styled(NavLink)`
  padding: 0.5ren;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: 667500;
  font-weight: bold;
  font-size: 0.85rem;
  border-bottom: 2px solid transparent;
  border-color: ${props =>
    props.activeClassName === "active" ? "#1da1f2" : "transparent"};
`;

export const HeadingLink = styled(Link)`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.01px;
  padding-right: 35px;
  font-weight: bold;

  & .heading-link {
    text-decoration: none;
    color: #1da1f2;

    &:hover {
      text-decoration: underline;
    }
  }
`;
