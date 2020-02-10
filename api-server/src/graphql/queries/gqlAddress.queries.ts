import {
  GraphQLFieldConfigMap,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from "graphql";
import GqlPerson from "../models/gqlPerson";
import Address from "../../mysql/models/address";
import { GqlAddress } from "../models/gqlAddress";

export const GqlAddressQueries: GraphQLFieldConfigMap<any, any> = {
  address: {
    type: GqlAddress,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(_, args) {
      return Address.findOne({
        where: args
      });
    }
  }
};
