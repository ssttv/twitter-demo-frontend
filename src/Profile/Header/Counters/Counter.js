// @flow
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FormattedNumber } from "react-intl";

const Text = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 21px;
  color: #707e88;
`;

const Amount = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #707e88;
`;

const InfoLink = styled(NavLink)`
  padding-bottom: 8px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid transparent;

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

const Stat = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  min-width: 75px;
  cursor: pointer;
`;

type Props = {
  url: string,
  to: string,
  active?: Object,
  text: string,
  count: number
};

const Counter = ({ url, to, active, text, count }: Props) => (
  <Stat>
    <InfoLink to={`${url}${to}`} isActive={active}>
      <Text>{text}</Text>
      <Amount>
        <FormattedNumber value={count} />
      </Amount>
    </InfoLink>
  </Stat>
);

Counter.defaultProps = {
  active: undefined
};

export default Counter;
