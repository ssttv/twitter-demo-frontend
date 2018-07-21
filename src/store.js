// @flow
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./complexes/reducers";

export default function store(initialState?: Object) {
  return createStore(reducer, initialState, applyMiddleware(thunk));
}
