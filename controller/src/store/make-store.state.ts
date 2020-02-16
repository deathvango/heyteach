import { MakeStore } from "next-redux-wrapper";
import { createStore } from "redux";
import { ReduxState } from "./store.state";
import { initialState } from "./initial-state.state";

const currentTabReducer = (state: ReduxState = initialState, action: any): ReduxState => {
  switch (action.type) {
    case "TEST":
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};

export const makeStore: MakeStore = (state, options) => {
  return createStore(currentTabReducer, initialState);
};
