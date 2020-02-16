import { initialState } from "../store/initial-state.state";
import { ActionKeys } from "../actions/action-keys.type";
import { Course } from "../models/course";
import { MyAction } from "../actions/action-wrapper.type";

export default function coursesReducer(state: Course[] = initialState.courses, action: MyAction<Course[]>): Course[] {
  switch (action.type) {
    case ActionKeys.GetCourses:
      return [...action.payload];
    default:
      return state;
  }
}
