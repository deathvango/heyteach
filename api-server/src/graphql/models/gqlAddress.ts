import { GraphQLObjectType, GraphQLString } from "graphql";
import User from "../../mysql/models/user";
import GqlPerson from "./gqlPerson";
import Address from "../../mysql/models/address";

export const GqlAddress = new GraphQLObjectType({
  name: "Address",
  description: "Represents an address",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(address: Address) {
        return address.id;
      }
    },
    lineOne: {
      type: GraphQLString,
      resolve(address: Address) {
        return address.lineOne;
      }
    },
    lineTwo: {
      type: GraphQLString,
      resolve(address: Address) {
        return address.lineTwo;
      }
    },
    city: {
      type: GraphQLString,
      resolve(address: Address) {
        return address.city;
      }
    },
    state: {
      type: GraphQLString,
      resolve(address: Address) {
        return address.state;
      }
    },
    zip: {
      type: GraphQLString,
      resolve(address: Address) {
        return address.zip;
      }
    }
  })
});
