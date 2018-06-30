import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import styledMap from "styled-map";
import { findUser } from "../../data/utils";
import Actions from "./Actions";
import pinned from "../icons/pinned.svg";
import tweets from "../../data/tweets";

const TweetContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvatarContainer = styled.div`
  padding-right: 10px;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  display: block;
  margin-top: 10px;
  border-radius: 50%;
`;

const ContentContainer = styled.div``;

const Pinned = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 38px;
`;

const PinnedText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 14px;
  color: #707e88;
  padding-left: 6px;
`;

const PinnedIcon = styled.img``;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

const Person = styled.span``;

const PersonLink = styled(Link)`
  font-size: 16px;
  line-height: 16px;
  color: black;
  text-decoration: none;
  margin-right: 4px;
  cursor: pointer;

  &:hover ${Person} {
    text-decoration: underline;
  }
`;

const Username = styled.span`
  padding-left: 2px;
  font-size: 14px;
  line-height: 16px;
  color: #697787;
`;

const Dotted = styled.span`
  color: #697787;
`;

const Date = styled.div`
  padding-left: 2px;
`;

const DateLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  color: #697787;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.p`
  font-size: ${styledMap({
    short: "16px",
    default: "25px"
  })};

  line-height: ${styledMap({
    short: "22px",
    default: "30px"
  })};

  font-weight: 200;
  color: black;
  margin: 2px 0 8px 0;
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

const Image = styled.img`
  width: ${styledMap({
    shortImg: "126px",
    default: "100%"
  })};

  height: ${styledMap({
    shortImg: "126px",
    default: "100%"
  })};

  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
`;

const Info = styled.div`
  font-size: 15px;
  line-height: 18px;
  border: 1px solid #e1e8ed;
  border-left: none;
  padding: 6px 2px 4px 9px;
`;

const InfoTitle = styled.span`
  font-weight: 500;
`;

const InfoText = styled.p`
  margin: 0;
  max-height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoLink = styled.a`
  font-weight: normal;
  color: #697787;
  text-decoration: none;
  opacity: 0.8;

  &:hover {
    text-decoration: underline;
  }
`;

const ShortInfo = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #e1e8ed;
  }
`;

const Tweet = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const TweetList = styled.div`
  background-color: white;
`;

const tweetMessage = text => {
  let key = 0;
  return text.split(" ").map(textElement => {
    key += 1;
    if (textElement[0] === "#") {
      return (
        <span key={key}>
          <Hashtag to={`/search?q=${textElement}`}>{textElement}</Hashtag>{" "}
        </span>
      );
    }
    if (textElement.includes(".com")) {
      return (
        <span key={key}>
          <LinkWebSite href={`https://${textElement}`}>
            {textElement}
          </LinkWebSite>{" "}
        </span>
      );
    }

    return `${textElement} `;
  });
};

export default withRouter(({ match }) => (
  <TweetList>
    {tweets.map(tweet => (
      <Tweet key={tweet.id}>
        {tweet.statusPin && (
          <Pinned>
            <PinnedIcon alt="Pinned image" src={pinned} />
            <PinnedText>Pinned Tweet</PinnedText>
          </Pinned>
        )}
        <TweetContent>
          <AvatarContainer>
            <Avatar src={tweet.userAvatar} />
          </AvatarContainer>
          <ContentContainer>
            <Title>
              <PersonLink to={`${match.url}`}>
                <Person>{findUser(match.url.slice(1), "name")}</Person>
                <Username>@{match.url.slice(1)}</Username>
              </PersonLink>
              <Date>
                <Dotted> • </Dotted>
                <DateLink to={tweet.toDate}>{tweet.dateText}</DateLink>
              </Date>
            </Title>
            {tweet.tweetText.split(" ").length >= 16 ? (
              <Message short>{tweetMessage(tweet.tweetText)}</Message>
            ) : (
              <Message>{tweetMessage(tweet.tweetText)}</Message>
            )}
            <ShortInfo>
              {tweet.infoSrc &&
                !tweet.infoPromo && (
                  <Image alt="Tweet image" src={tweet.infoSrc} />
                )}
              {tweet.infoPromo && (
                <React.Fragment>
                  <Image alt="Tweet image" src={tweet.infoSrc} shortImg />
                  <Info>
                    <InfoTitle>{tweet.infoTitle}</InfoTitle>
                    <InfoText>{tweet.infoText}</InfoText>
                    <InfoLink>{tweet.toInfo}</InfoLink>
                  </Info>
                </React.Fragment>
              )}
            </ShortInfo>
            <Actions
              comments={tweet.comments}
              retweets={tweet.retweets}
              likes={tweet.likes}
              messages={tweet.messages}
              activeLike={tweet.activeLike}
            />
          </ContentContainer>
        </TweetContent>
      </Tweet>
    ))}
  </TweetList>
));
