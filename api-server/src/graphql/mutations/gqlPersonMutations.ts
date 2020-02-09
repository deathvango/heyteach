import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Person from "../../mysql/models/person";

export const GqlPersonMutations: GraphQLFieldConfigMap<any, any> = {
  addPerson: {
    type: GqlPerson,
    args: {
      firstName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(_, args) {
      return Person.create(<Person>{
        firstName: args.firstName,
        lastName: args.lastName
      });
    }
  },
  updatePerson: {
    type: GqlPerson
  }
};
