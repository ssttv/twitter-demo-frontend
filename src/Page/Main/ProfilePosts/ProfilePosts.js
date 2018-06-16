import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pinned from "./pinned.svg";
import contentImg from "./post-img.jpg";
import comment from "./comment.svg";
import retweet from "./retweet.svg";
import like from "./like.svg";
import message from "./message.svg";

const Container = styled.div`
  background-color: white;
  min-width: 591px;
  width: 600px;
  margin-left: 18px;
`;

const ProfileHeading = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
`;

const Heading = styled.li`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.01px;
  padding-right: 35px;
  font-weight: bold;
`;

const HeadingLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Post = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e6ecf0;
`;

const AvatarContainer = styled.div`
  padding-right: 10px;
`;

const Avatar = styled(Link)`
  background-image: url(${"/avatar.svg"});
  width: 45px;
  height: 45px;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50px;
  padding-top: 35px;
`;

const ContentContainer = styled.div``;

const Pinned = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.18px;
  color: #707e88;
  position: relative;

  &:before {
    content: "";
    background-image: url(${pinned});
    position: absolute;
    width: 12px;
    height: 12px;
    left: -4%;
    background-repeat: no-repeat;
    background-position: center;
    top: 2px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 57%;
  justify-content: space-between;
  margin-top: 5px;
`;

const Person = styled.div``;

const PersonLink = styled(Link)`
  font-size: 16px;
  line-height: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserHandle = styled.div``;

const UserHandleLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  color: #697787;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DateLink = UserHandleLink.extend``;

const Day = styled.span`
  padding-right: 2px;
`;

const Month = Day.extend``;

const Year = Month.extend``;

const PostMessage = styled.p`
  font-size: 25px;
  font-weight: lighter;
  line-height: 30px;
  color: black;
  margin: 2px 0 15px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Hashtag = styled(Link)`
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkWebSite = styled.a`
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img``;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  margin-top: 12px;
`;

const Action = styled.div`
  min-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const ActionImage = styled.img``;

const Count = styled.span`
  margin-left: 11px;
  min-width: 18px;
  width: 18px;
  display: inline-block;
  min-height: 16px;
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  letter-spacing: -0.19px;
  color: #667580;
`;

export default () => (
  <Container>
    <ProfileHeading>
      <Heading>
        <HeadingLink to="/EveryInteract" className="heading-link">
          Tweets
        </HeadingLink>
      </Heading>
      <Heading>
        <HeadingLink to="/EveryInteract/with_replies" className="heading-link">
          Tweets & replies
        </HeadingLink>
      </Heading>
      <Heading>
        <HeadingLink to="/EveryInteract/media" className="heading-link">
          Media
        </HeadingLink>
      </Heading>
    </ProfileHeading>
    <Post>
      <AvatarContainer>
        <Avatar alt="avatar" to="/EveryInteract" />
      </AvatarContainer>
      <ContentContainer>
        <Pinned>Pinned Tweet</Pinned>
        <Title>
          <Person>
            <PersonLink to="/EveryInteract">Every Interaction</PersonLink>
          </Person>
          <UserHandle>
            <UserHandleLink to="/EveryInteract">@EveryInteract</UserHandleLink>
          </UserHandle>
          <DateLink to="/status/777">
            <Day>2</Day>
            <Month>Mar</Month>
            <Year>2015</Year>
          </DateLink>
        </Title>
        <PostMessage>
          We&apos;ve made some more resources for all you wonderful{" "}
          <Hashtag to="/hashtag/design">#design</Hashtag> folk{" "}
          <LinkWebSite href="https://everyinteraction.com/resources/">
            everyinteraction.com/resources/
          </LinkWebSite>{" "}
          <Hashtag to="/hashtag/webdesign">#webdesign</Hashtag>{" "}
          <Hashtag to="/hashtag/ui">#UI</Hashtag>{" "}
        </PostMessage>
        <Image alt="post image" src={contentImg} />
        <Actions>
          <Action>
            <ActionImage alt="comment" src={comment} />
            <Count />
          </Action>
          <Action>
            <ActionImage alt="retweet" src={retweet} />
            <Count>17</Count>
          </Action>
          <Action>
            <ActionImage alt="like" src={like} />
            <Count>47</Count>
          </Action>
          <Action>
            <ActionImage alt="message" src={message} />
            <Count />
          </Action>
        </Actions>
      </ContentContainer>
    </Post>
  </Container>
);