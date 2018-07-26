// @flow

const env = process.env || {};
const secretKey = env.REACT_APP_SECRET_KEY;
if (!secretKey) throw new Error("missing API key");

function userInfoHasError(bool) {
  return {
    type: "USER_DATA_HAS_ERROR",
    hasError: bool
  };
}

function userInfoIsLoading(bool) {
  return {
    type: "USER_INFO_IS_LOADING",
    isLoading: bool
  };
}

function userInfoFetchSuccess(userInfo) {
  return {
    type: "USER_INFO_FETCH_SUCCESS",
    userInfo
  };
}

export default function userInfoFetchData(id: string) {
  return dispatch => {
    dispatch(userInfoIsLoading(true));

    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${id}?access_token=${secretKey}`
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(userInfoIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(userInfo => dispatch(userInfoFetchSuccess(userInfo)))
      .catch(() => dispatch(userInfoHasError(true)));
  };
}
