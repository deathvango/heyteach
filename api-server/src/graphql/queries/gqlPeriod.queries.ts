import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Instructor from "../../mysql/models/instructor";
import Period from "../../mysql/models/period";
import Student from "../../mysql/models/student";
import Category from "../../mysql/models/category";
import Course from "../../mysql/models/course";
import Person from "../../mysql/models/person";
import Lesson from "../../mysql/models/lesson";
import { GqlPeriod } from "../models/gqlPeriod";

export const GqlPeriodQueries: GraphQLFieldConfigMap<any, any> = {
  periods: {
    type: new GraphQLList(GqlPeriod),
    args: {
      id: {
        type: GraphQLString
      },
      categoryId: {
        type: GraphQLString
      },
      courseId: {
        type: GraphQLString
      }
    },
    resolve(_, args) {
      return Period.findAll({
        where: args,
        include: [
          {
            model: Instructor,
            include: [Person]
          },
          {
            model: Student,
            include: [Person]
          },
          Category,
          Course,
          Lesson
        ]
      });
    }
  }
};
