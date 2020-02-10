import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Instructor from "../../mysql/models/instructor";
import Student from "../../mysql/models/student";
import Category from "../../mysql/models/category";
import Person from "../../mysql/models/person";
import { GraphQLDate } from "graphql-iso-date";
import Lesson from "../../mysql/models/lesson";
import { GqlLesson } from "../models/gqlLesson";

export const GqlLessonQueries: GraphQLFieldConfigMap<any, any> = {
  lessons: {
    type: new GraphQLList(GqlLesson),
    args: {
      id: {
        type: GraphQLString
      },
      periodId: {
        type: GraphQLString
      },
      dayOf: {
        type: GraphQLDate
      }
    },
    resolve(_, args) {
      return Lesson.findAll({
        where: args,
        include: [Instructor, Student, Category, Person]
      });
    }
  }
};
