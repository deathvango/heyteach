import { Course } from "../models/course";
import { User } from "../models/user";
import { Category } from "../models/category";

export interface StoreState {
  categories: Category[];
  courses: Course[];
  users: User[];
}
