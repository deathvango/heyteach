import { GraphQLObjectType, GraphQLString } from "graphql";
import User from "../../mysql/models/user";
import GqlPerson from "./gqlPerson";
import Address from "../../mysql/models/address";
import Category from "../../mysql/models/category";
import { GqlCategoryType } from "./gqlCategoryType";

export const GqlCategory = new GraphQLObjectType({
  name: "Category",
  description: "Represents a category",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(category: Category) {
        return category.id;
      }
    },
    name: {
      type: GraphQLString,
      resolve(category: Category) {
        return category.name;
      }
    },
    description: {
      type: GraphQLString,
      resolve(category: Category) {
        return category.description;
      }
    },
    categoryTypeCode: {
      type: GraphQLString,
      resolve(category: Category) {
        return category.categoryTypeCode;
      }
    },
    categoryType: {
      type: GqlCategoryType,
      resolve(category: Category) {
        return category.categoryType;
      }
    }
  })
});
