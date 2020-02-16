import { initialState } from "../store/initial-state.state";
import { ActionKeys } from "../actions/action-keys.type";
import { Course } from "../models/course";
import { MyAction } from "../actions/action-wrapper.type";
import { Category } from "../models/category";

export default function categoriesReducer(
  state: Category[] = initialState.categories,
  action: MyAction<Category[]>,
): Category[] {
  switch (action.type) {
    case ActionKeys.GetCategories:
      return [...action.payload];
    default:
      return state;
  }
}
