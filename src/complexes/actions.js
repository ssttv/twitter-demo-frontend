// @flow
function userInfoIsLoading(bool) {
  return {
    type: "USER_INFO_IS_LOADING",
    isLoading: bool
  };
}

function userInfoHasError(bool) {
  return {
    type: "USER_INFO_HAS_ERROR",
    hasError: bool
  };
}

function userInfoFetchSuccess(userInfo) {
  return {
    type: "USER_INFO_FETCH_SUCCESS",
    userInfo
  };
}

export default function userInfoFetchData(url: string): Object {
  return dispatch => {
    dispatch(userInfoIsLoading(true));

    fetch(url)
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
