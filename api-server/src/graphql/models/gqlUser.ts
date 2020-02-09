import { GraphQLObjectType, GraphQLString } from "graphql";
import User from "../../mysql/models/user";
import GqlPerson from "./gqlPerson";

export const GqlUser = new GraphQLObjectType({
  name: "User",
  description: "Represents a user",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(user: User) {
        return user.id;
      }
    },
    username: {
      type: GraphQLString,
      resolve(user: User) {
        return user.username;
      }
    },
    person: {
      type: GqlPerson,
      resolve: (user: User) => {
        return user.person;
      }
    }
  })
});
