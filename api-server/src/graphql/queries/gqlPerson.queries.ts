import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Person from "../../mysql/models/person";
import Address from "../../mysql/models/address";

export const GqlPersonQueries: GraphQLFieldConfigMap<any, any> = {
  people: {
    type: new GraphQLList(GqlPerson),
    args: {
      id: {
        type: GraphQLString
      }
    },
    resolve(_, args) {
      return Person.findAll({
        where: args,
        include: [Address]
      });
    }
  }
};
