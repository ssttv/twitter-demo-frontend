import React from "react";
import styled from "styled-components";
import comment from "../icons/comment.svg";
import retweet from "../icons/retweet.svg";
import like from "../icons/like.svg";
import message from "../icons/message.svg";
import likeActive from "../icons/like-active.svg";

const Actions = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  padding-left: 0;
  margin: 14px 0 0 0;
`;

const Image = styled.img`
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
`;

const Action = styled.li`
  padding: 0;
  min-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  min-width: 50px;

  &:hover {
    ${Image} {
      border-bottom: 1px solid black;
    }
  }
`;

const Count = styled.span`
  margin-left: 11px;
  min-width: 18px;
  width: 18px;
  display: inline-block;
  min-height: 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: #667580;
`;

export default ({ comments, retweets, likes, activeLike, messages }) => (
  <Actions>
    <Action>
      <Image alt="comments" src={comment} />
      <Count>{comments}</Count>
    </Action>
    <Action>
      <Image alt="retweets" src={retweet} />
      <Count>{retweets}</Count>
    </Action>
    <Action>
      {activeLike ? (
        <Image alt="likes" src={like} />
      ) : (
        <Image alt="likes" src={likeActive} />
      )}
      <Count>{likes}</Count>
    </Action>
    <Action>
      <Image alt="messages" src={message} />
      <Count>{messages}</Count>
    </Action>
  </Actions>
);
