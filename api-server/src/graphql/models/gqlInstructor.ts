import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import GqlPersonInterface from "./gqlPerson";
import Instructor from "../../mysql/models/instructor";
import { GqlPeriod } from "./gqlPeriod";
import Person from "../../mysql/models/person";
import GqlPerson from "./gqlPerson";

export const GqlInstructor = new GraphQLObjectType({
  name: "Instructor",
  description: "Represents an instructor",
  isTypeOf: value => value instanceof Instructor,
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(instructor: Instructor) {
        return instructor.id;
      }
    },
    personId: {
      type: GraphQLString,
      resolve(instructor: Instructor) {
        return instructor.personId;
      }
    },
    person: {
      type: GqlPerson,
      resolve(instructor: Instructor) {
        return instructor.person;
      }
    }
  })
});
