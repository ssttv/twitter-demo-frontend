// @flow
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk/index.d.ts";
import reducer from "./complexes/reducers";

export default function store(initialState: Object) {
  return createStore(reducer, initialState, applyMiddleware(thunk));
}
