import { combineReducers } from "redux";
import courses from "./courses.reducer";
import users from "./users.reducer";

export default combineReducers({
  courses,
  users,
});
