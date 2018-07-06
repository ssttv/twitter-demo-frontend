import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styledMap from "styled-map";
import Actions from "./Actions";
import pin from "../icons/pinned.svg";

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

const TweetUnit = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

class Tweet extends Component {
  state = {
    error: false,
    card: []
  };

  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/statuses/${id}/card?access_token=${
        process.env.REACT_APP_SECRET_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            card: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { error, card } = this.state;
    if (error) {
      return <h3>Can not render Tweet</h3>;
    }

    const {
      id,
      pinned,
      avatar,
      personNick,
      person,
      uri,
      date,
      content,
      media,
      comments,
      retweets,
      likes,
      messages,
      activeLike
    } = this.props;

    return (
      <TweetUnit key={id}>
        {pinned && (
          <Pinned>
            <PinnedIcon alt="Pinned image" src={pin} />
            <PinnedText>Pinned Tweet</PinnedText>
          </Pinned>
        )}
        <TweetContent>
          <AvatarContainer>
            <Avatar src={avatar} />
          </AvatarContainer>
          <ContentContainer>
            <Title>
              <PersonLink to={`/${personNick}`}>
                <Person>{person}</Person>
                <Username>@{personNick}</Username>
              </PersonLink>
              <Date>
                <Dotted> • </Dotted>
                <DateLink to={uri}>{date}</DateLink>
              </Date>
            </Title>
            {content.length > 120 ? (
              <Message short dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <Message dangerouslySetInnerHTML={{ __html: content }} />
            )}
            <ShortInfo>
              {media.length > 0 && (
                <Image alt="Tweet image" src={media[0].preview_url} />
              )}
              {card.url ? (
                <React.Fragment>
                  {card.image ? (
                    <Image alt="Tweet image" src={card.image} shortImg />
                  ) : null}
                  <Info href={card.url}>
                    <InfoTitle>{card.title}</InfoTitle>
                    <InfoText>{card.description}</InfoText>
                    <InfoLink href={card.url}>{card.url}</InfoLink>
                  </Info>
                </React.Fragment>
              ) : null}
            </ShortInfo>
            <Actions
              comments={comments}
              retweets={retweets}
              likes={likes}
              messages={messages}
              activeLike={activeLike}
            />
          </ContentContainer>
        </TweetContent>
      </TweetUnit>
    );
  }
}

export default Tweet;
