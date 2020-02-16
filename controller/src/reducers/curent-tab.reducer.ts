import { initialState } from "../store/initial-state.state";
import { StoreState } from "../store/store.state";

export const currentTabReducer = (state: StoreState = initialState, action: any): StoreState => {
  switch (action.type) {
    case "TEST":
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};
