import { Dispatch } from "redux";
import { ActionKeys } from "./action-keys.type";
import { MyAction } from "./action-wrapper.type";

export default class ActionHandler {
  static async Execute<T>(dispatch: Dispatch, action: ActionKeys, call: () => Promise<T>) {
    try {
      const response = await call();
      const myAction: MyAction<T> = {
        type: action,
        payload: response,
      };
      dispatch(myAction);
      return true;
    } catch (err) {
      console.log("ERROR: " + err.message);
      return false;
    }
  }
}
