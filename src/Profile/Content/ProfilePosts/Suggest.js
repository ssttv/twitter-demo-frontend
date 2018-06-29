import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button";
import cross from "./cross.svg";
import checkmark from "./checkmark.svg";
import suggests from "../../../data/suggests";

const FollowButton = styled(Button)`
  padding: 7px 20px;
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

export default () => (
  <React.Fragment>
    {suggests.map(suggest => (
      <User key={suggest.id}>
        <Recommended>
          <Info>
            <UserLink to={`/${suggest.handle}`}>
              <Avatar src={suggest.src} alt="avatar" />
              <FullName>
                <Name>{suggest.name}</Name>
                {suggest.status && <Status src={checkmark} />}
              </FullName>
              <UserHandle>{`@${suggest.handle}`}</UserHandle>
            </UserLink>
            <FollowButton primary>Follow</FollowButton>
          </Info>
          <Delete src={cross} alt="Remove from suggestions" />
        </Recommended>
      </User>
    ))}
  </React.Fragment>
);
