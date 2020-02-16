import { GraphQlHelper } from "../utils/graphQl.util";
import { Course } from "../models/course";

export class CoursesApi {
  static GetUsers(): Promise<Course[]> {
    const query = GraphQlHelper.BuildQuery(`courses {
      id
      name
      description
    }`);

    return GraphQlHelper.Send(query).then(resp => {
      return resp.data.courses;
    });
  }
}
