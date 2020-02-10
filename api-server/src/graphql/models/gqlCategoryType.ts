import { GraphQLObjectType, GraphQLString } from "graphql";
import User from "../../mysql/models/user";
import GqlPerson from "./gqlPerson";
import Address from "../../mysql/models/address";
import Category from "../../mysql/models/category";
import CategoryType from "../../mysql/models/categoryType";

export const GqlCategoryType = new GraphQLObjectType({
  name: "CategoryType",
  description: "Represents a category type",
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(categoryType: CategoryType) {
        return categoryType.typeCode;
      }
    },
    description: {
      type: GraphQLString,
      resolve(categoryType: CategoryType) {
        return categoryType.description;
      }
    }
  })
});
