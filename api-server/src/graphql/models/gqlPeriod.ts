import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import User from "../../mysql/models/user";
import GqlPerson from "./gqlPerson";
import Address from "../../mysql/models/address";
import Category from "../../mysql/models/category";
import { GqlCategoryType } from "./gqlCategoryType";
import Course from "../../mysql/models/course";
import Lesson from "../../mysql/models/lesson";
import { GraphQLDate } from "graphql-iso-date";
import Period from "../../mysql/models/period";
import { GqlCourse } from "./gqlCourse";
import { GqlCategory } from "./gqlCategory";
import { GqlStudent } from "./gqlStudent";
import { GqlInstructor } from "./gqlInstructor";
import { GqlLesson } from "./gqlLesson";

export const GqlPeriod = new GraphQLObjectType({
  name: "Period",
  description: "Represents a period",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (period: Period) => {
        return period.id;
      }
    },
    courseId: {
      type: GraphQLString,
      resolve: (period: Period) => {
        return period.courseId;
      }
    },
    course: {
      type: GqlCourse,
      resolve: (period: Period) => {
        return period.course;
      }
    },
    categoryId: {
      type: GraphQLString,
      resolve: (period: Period) => {
        return period.categoryId;
      }
    },
    category: {
      type: GqlCategory,
      resolve: (period: Period) => {
        return period.category;
      }
    },
    students: {
      type: new GraphQLList(GqlStudent),
      resolve: (period: Period) => {
        return period.students;
      }
    },
    instructors: {
      type: new GraphQLList(GqlInstructor),
      resolve: (period: Period) => {
        return period.instructors;
      }
    },
    lessons: {
      type: new GraphQLList(GqlLesson),
      resolve: (period: Period) => {
        return period.lessons;
      }
    }
  })
});
