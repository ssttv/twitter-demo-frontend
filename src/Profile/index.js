// @flow
import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Route, Switch, Redirect } from "react-router-dom";
import type { Match } from "react-router-dom";
import Header from "./Header";
import Info from "./Info";
import Artefacts from "./Info/Artefacts";
import SharedFollowers from "./Info/SharedFollowers";
import Feeds from "./Feeds";
import Outreach from "./Outreach";

const Container = styled.div`
  background-color: #e6ecf0;
  width: 100%;
`;

const ProfileFace = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  justify-content: space-between;
`;

type Props = {
  match: Match
};

type State = {
  error: ?Object,
  isLoaded: boolean,
  userInfo: {
    id: string,
    username: string,
    acct: string,
    display_name: string,
    locked: boolean,
    bot: boolean,
    created_at: string,
    note: string,
    url: string,
    avatar: string,
    avatar_static: string,
    header: string,
    header_static: string,
    followers_count: number,
    following_count: number,
    statuses_count: number,
    emojis: (?Object)[],
    fields: (?Object)[],
    error?: string
  }
};

class Profile extends React.Component<Props, State> {
  state = {
    error: null,
    isLoaded: false,
    userInfo: {}
  };

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate(prevProps: Props) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.getUserInfo();
    }
  }

  getUserInfo = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const getUserId = (): string => {
      const errorWatchdog: string = "1";
      if (id === null || id === undefined) {
        return errorWatchdog;
      }
      const userId: string = id;
      return userId;
    };

    const env = process.env || {};
    const secretKey = env.REACT_APP_SECRET_KEY;
    if (!secretKey) throw new Error("missing API key");

    const link: string = `https://twitter-demo.erodionov.ru/api/v1/accounts/${getUserId()}?access_token=${secretKey}`;
    fetch(link)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            userInfo: result
          });
        },
        err => {
          this.setState({
            isLoaded: false,
            error: err
          });
        }
      );
  };

  render() {
    const { error, isLoaded, userInfo } = this.state;
    if (error) {
      return <Redirect to="/error" />;
    }
    if (!isLoaded) {
      return <h3>Loading in progress</h3>;
    }

    return (
      <main>
        <Helmet>
          <title>
            {userInfo.display_name} (@{userInfo.username})
          </title>
        </Helmet>
        <React.Fragment>
          <Header
            background={userInfo.header_static}
            avatar={userInfo.avatar_static}
            followers={userInfo.followers_count}
            following={userInfo.following_count}
            tweets={userInfo.statuses_count}
          />
          <Container>
            <div className="container">
              <ProfileFace>
                <div className="col-xs-3">
                  <Info
                    handle={userInfo.username}
                    name={userInfo.display_name}
                    verifiedStatus={false}
                    followStatus
                    bio={userInfo.note}
                    city="London"
                    country="UK"
                    website={userInfo.url}
                    date={userInfo.created_at}
                  />
                  <Route component={SharedFollowers} />
                  <Route component={Artefacts} />
                </div>
                <div className="col-xs-6">
                  <Switch>
                    <Route path={`/${userInfo.id}`} component={Feeds} />
                    <Route
                      exact
                      path={`${userInfo.id}/following`}
                      render={() => <h2> Following </h2>}
                    />
                    <Route
                      exact
                      path={`${userInfo.id}/followers`}
                      render={() => <h2> Followers </h2>}
                    />
                    <Route
                      exact
                      path={`${userInfo.id}/likes`}
                      render={() => <h2> Likes </h2>}
                    />
                    <Route
                      exact
                      path={`${userInfo.id}/lists`}
                      render={() => <h2> Lists </h2>}
                    />
                  </Switch>
                </div>
                <div className="col-xs-3">
                  <Outreach />
                </div>
              </ProfileFace>
            </div>
          </Container>
        </React.Fragment>
      </main>
    );
  }
}

export default Profile;
