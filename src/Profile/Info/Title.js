// @flow
import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Icon = styled.img`
  margin-right: 10px;
  min-width: 15px;
`;

const Text = styled.span`
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
    ${Text} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

type Props = {
  to: string,
  src: string,
  alt: string,
  children: React.Node
};

export default ({ to, src, alt, children }: Props) => (
  <TitleLink to={to}>
    <Icon src={src} alt={alt} />
    <Text>{children}</Text>
  </TitleLink>
);
