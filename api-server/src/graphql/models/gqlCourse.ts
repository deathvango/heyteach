import { GraphQLObjectType, GraphQLString } from "graphql";
import User from "../../mysql/models/user";
import GqlPerson from "./gqlPerson";
import Address from "../../mysql/models/address";
import Category from "../../mysql/models/category";
import { GqlCategoryType } from "./gqlCategoryType";
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
