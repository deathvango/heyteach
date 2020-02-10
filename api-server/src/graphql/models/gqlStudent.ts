import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import GqlPersonInterface from "./gqlPerson";
import Student from "../../mysql/models/student";
import Period from "../../mysql/models/period";
import { GqlPeriod } from "./gqlPeriod";
import GqlPerson from "./gqlPerson";

export const GqlStudent = new GraphQLObjectType({
  name: "Student",
  description: "Represents a student",
  isTypeOf: value => value instanceof Student,
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (student: Student) => {
        return student.id;
      }
    },
    personId: {
      type: GraphQLString,
      resolve: (student: Student) => {
        return student.personId;
      }
    },
    person: {
      type: GqlPerson,
      resolve: (student: Student) => {
        return student.person;
      }
    }
  })
});
