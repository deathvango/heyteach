import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import Person from "../../mysql/models/person";
import User from "../../mysql/models/user";
import { GqlUser } from "../models/gqlUser";

export const GqlUserQueries: GraphQLFieldConfigMap<any, any> = {
  users: {
    type: new GraphQLList(GqlUser),
    args: {
      id: {
        type: GraphQLString
      },
      username: {
        type: GraphQLString
      }
    },
    resolve(root, args) {
      return User.findAll({
        where: args,
        include: [Person]
      });
    }
  }
};
