import { GraphQLObjectType, GraphQLString } from "graphql";
import Course from "../../mysql/models/course";

export const GqlCourse = new GraphQLObjectType({
  name: "Course",
  description: "Represents a course",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(course: Course) {
        return course.id;
      }
    },
    name: {
      type: GraphQLString,
      resolve(course: Course) {
        return course.name;
      }
    },
    description: {
      type: GraphQLString,
      resolve(course: Course) {
        return course.description;
      }
    }
  })
});
