import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import User from "../../mysql/models/user";
import GqlPerson from "./gqlPerson";
import Address from "../../mysql/models/address";
import Category from "../../mysql/models/category";
import { GqlCategoryType } from "./gqlCategoryType";
import Course from "../../mysql/models/course";
import Lesson from "../../mysql/models/lesson";
import { GraphQLDate } from "graphql-iso-date";
import { GqlPeriod } from "./gqlPeriod";
import { GqlStudent } from "./gqlStudent";
import { GqlInstructor } from "./gqlInstructor";

export const GqlLesson = new GraphQLObjectType({
  name: "Lesson",
  description: "Represents a lesson",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(lesson: Lesson) {
        return lesson.id;
      }
    },
    periodId: {
      type: GraphQLString,
      resolve(lesson: Lesson) {
        return lesson.periodId;
      }
    },
    dayOf: {
      type: GraphQLDate,
      resolve(lesson: Lesson) {
        return lesson.dayOf;
      }
    },
    students: {
      type: new GraphQLList(GqlStudent),
      resolve(lesson: Lesson) {
        return lesson.students;
      }
    },
    instructors: {
      type: new GraphQLList(GqlInstructor),
      resolve(lesson: Lesson) {
        return lesson.instructors;
      }
    }
  })
});
