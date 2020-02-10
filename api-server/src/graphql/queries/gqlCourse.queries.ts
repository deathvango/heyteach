import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Instructor from "../../mysql/models/instructor";
import Period from "../../mysql/models/period";
import Student from "../../mysql/models/student";
import Category from "../../mysql/models/category";
import Person from "../../mysql/models/person";
import { GraphQLDate } from "graphql-iso-date";
import Course from "../../mysql/models/course";
import { GqlCourse } from "../models/gqlCourse";

export const GqlCourseQueries: GraphQLFieldConfigMap<any, any> = {
  courses: {
    type: new GraphQLList(GqlCourse),
    args: {
      id: {
        type: GraphQLString
      }
    },
    resolve(_, args) {
      return Course.findAll({
        where: args
      });
    }
  }
};
