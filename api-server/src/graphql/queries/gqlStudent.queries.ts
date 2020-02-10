import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Person from "../../mysql/models/person";
import Student from "../../mysql/models/student";
import { GqlStudent } from "../models/gqlStudent";
import Address from "../../mysql/models/address";

export const GqlStudentQueries: GraphQLFieldConfigMap<any, any> = {
  students: {
    type: new GraphQLList(GqlStudent),
    args: {
      id: {
        type: GraphQLString
      },
      personId: {
        type: GraphQLString
      }
    },
    resolve(_, args) {
      return Student.findAll({
        where: args,
        include: [Person]
      });
    }
  }
};
