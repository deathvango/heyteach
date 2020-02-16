import { combineReducers } from "redux";
import courses from "./courses.reducer";
import users from "./users.reducer";
import categories from "./categories.reducer";

export default combineReducers({
  courses,
  users,
  categories,
});
