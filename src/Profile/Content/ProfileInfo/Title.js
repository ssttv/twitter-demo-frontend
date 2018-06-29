import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleIcon = styled.img`
  margin-right: 10px;
  min-width: 15px;
`;

const TitleText = styled.span`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  color: #1da1f2;
  border-bottom: 1px solid transparent;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 8px;
  display: flex;

  &:hover {
    ${TitleText} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

export default ({ to, src, alt, children }) => (
  <TitleLink to={to}>
    <TitleIcon src={src} alt={alt} />
    <TitleText>{children}</TitleText>
  </TitleLink>
);
