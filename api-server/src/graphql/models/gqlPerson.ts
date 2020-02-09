import { GraphQLObjectType, GraphQLString } from "graphql";
import Person from "../../mysql/models/person";

const GqlPerson = new GraphQLObjectType({
  name: "Person",
  description: "Represents a person",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(person: Person) {
        return person.id;
      }
    },
    userId: {
      type: GraphQLString,
      resolve(person: Person) {
        return person.userId;
      }
    },
    firstName: {
      type: GraphQLString,
      resolve(person: Person) {
        return person.firstName;
      }
    },
    lastName: {
      type: GraphQLString,
      resolve(person: Person) {
        return person.lastName;
      }
    },
    phone: {
      type: GraphQLString,
      resolve(person: Person) {
        return person.phone;
      }
    },
    email: {
      type: GraphQLString,
      resolve(person: Person) {
        return person.email;
      }
    }
  })
});

export default GqlPerson;
