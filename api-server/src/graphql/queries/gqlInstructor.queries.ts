import { GraphQLFieldConfigMap, GraphQLList, GraphQLString } from "graphql";
import GqlPerson from "../models/gqlPerson";
import Person from "../../mysql/models/person";
import Instructor from "../../mysql/models/instructor";
import { GqlInstructor } from "../models/gqlInstructor";
import Address from "../../mysql/models/address";

export const GqlInstructorQueries: GraphQLFieldConfigMap<any, any> = {
  instructors: {
    type: new GraphQLList(GqlInstructor),
    args: {
      id: {
        type: GraphQLString
      },
      personId: {
        type: GraphQLString
      }
    },
    resolve(_, args) {
      return Instructor.findAll({
        where: args,
        include: [Person]
      });
    }
  }
};
