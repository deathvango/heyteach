import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Instructor from "../../mysql/models/instructor";
import Period from "../../mysql/models/period";
import Student from "../../mysql/models/student";
import Category from "../../mysql/models/category";
import Person from "../../mysql/models/person";
import { GraphQLDate } from "graphql-iso-date";
import Course from "../../mysql/models/course";
import { GqlCategory } from "../models/gqlCategory";

export const GqlCategoryQueries: GraphQLFieldConfigMap<any, any> = {
  categories: {
    type: new GraphQLList(GqlCategory),
    args: {
      id: {
        type: GraphQLString
      },
      categoryTypeCode: {
        type: GraphQLString
      }
    },
    resolve(_, args) {
      return Category.findAll({
        where: args
      });
    }
  }
};
