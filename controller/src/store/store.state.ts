import { Course } from "../models/course";
import { User } from "../models/user";

export interface StoreState {
  courses: Course[];
  users: User[];
}
