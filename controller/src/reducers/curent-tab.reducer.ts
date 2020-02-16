import { initialState } from "../store/initial-state.state";
import { ReduxState } from "../store/store.state";

const currentTabReducer = (state: ReduxState = initialState, action: any): ReduxState => {
  switch (action.type) {
    case "TEST":
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};
