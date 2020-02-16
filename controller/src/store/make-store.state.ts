import { MakeStore } from "next-redux-wrapper";
import { createStore } from "redux";
import { initialState } from "./initial-state.state";
import reducer from "../reducers/combined.reducer";

export const makeStore: MakeStore = (state, options) => {
  return createStore(reducer, initialState);
};
