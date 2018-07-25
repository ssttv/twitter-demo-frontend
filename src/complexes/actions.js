// @flow
import type { AccountData } from "../data/utils";

function addData(data: AccountData) {
  return {
    type: "ADD_USER_INFO",
    data
  };
}

export default addData;
