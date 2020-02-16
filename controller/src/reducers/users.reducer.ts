import { initialState } from "../store/initial-state.state";
import { ActionKeys } from "../actions/action-keys.type";
import { MyAction } from "../actions/action-wrapper.type";
import { User } from "../models/user";

export default function coursesReducer(state: User[] = initialState.users, action: MyAction<User[]>): User[] {
  switch (action.type) {
    case ActionKeys.GetUsers:
      return { ...action.payload };
    default:
      return state;
  }
}
