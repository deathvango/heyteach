import { ActionKeys } from "./action-keys.type";

export interface MyAction<T> {
  type: ActionKeys;
  payload: T;
}
