import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styledMap from "styled-map";
import cross from "./cross.svg";
import checkmark from "./checkmark.svg";

const Button = styled.button`
  border-radius: 100px;
  padding: 7px 20px;
  border: 1px solid #1da1f2;
  font-size: 14px;
  line-height: 14px;
  flex-grow: 1;
  white-space: nowrap;
  max-width: 128px;
  cursor: pointer;

  color: ${styledMap({
    primary: "#1da1f2",
    default: "white"
  })};

  background-color: ${styledMap({
    primary: "white",
    default: "#1da1f2"
  })};

  &:hover {
    transition: all 0.1s ease-in-out;
    opacity: 0.8;
    background-color: ${styledMap({
      primary: "#1da1f2"
    })};

    color: ${styledMap({
      primary: "white"
    })};
  }

  &:focus {
    box-shadow: rgb(255, 255, 255) 0 0 0 2px, rgb(164, 217, 249) 0 0 0 4px;
    outline: 0;
  }
`;

const Recommended = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin-left: 50px;
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  position: absolute;
  left: 0;
  border-radius: 100px;
`;

const Info = styled.div`
  margin-left: 10px;
`;

const Name = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: black;
  word-break: break-all;
  font-weight: 800;
  border-bottom: 1px solid transparent;
  display: inline-block;
  vertical-align: middle;
`;

const UserLink = styled(Link)`
  text-decoration: none;
  vertical-align: middle;
  margin-bottom: 8px;
  white-space: nowrap;
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    ${Name} {
      border-bottom: 1px solid black;
    }
  }
`;

const Status = styled.img`
  margin-left: 3px;
  vertical-align: middle;
`;

const UserHandle = Name.extend`
  font-weight: 400;
  color: #657786;
  padding-left: 4px;
`;

const Delete = styled.img`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const User = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 8px;
  padding-top: 8px;
`;

const FullName = styled.p`
  margin: 0;
  display: inline-block;
`;

export default ({ src, to, name, status, handle }) => (
  <User>
    <Recommended>
      <Info>
        <UserLink to={to}>
          <Avatar src={src} alt="avatar" />
          <FullName>
            <Name>{name}</Name>
            {status && <Status src={checkmark} />}
          </FullName>
          <UserHandle>{handle}</UserHandle>
        </UserLink>
        <Button primary>Follow</Button>
      </Info>
      <Delete src={cross} alt="icon delete" />
    </Recommended>
  </User>
);
