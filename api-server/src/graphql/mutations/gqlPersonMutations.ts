import {
  GraphQLFieldConfigMap,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFieldConfigArgumentMap
} from "graphql";
import GqlPerson from "../models/gqlPerson";
import Person from "../../mysql/models/person";

const personArgs: GraphQLFieldConfigArgumentMap = {
  firstName: {
    type: new GraphQLNonNull(GraphQLString)
  },
  lastName: {
    type: new GraphQLNonNull(GraphQLString)
  },
  email: {
    type: GraphQLString
  },
  phone: {
    type: GraphQLString
  }
};

export const GqlPersonMutations: GraphQLFieldConfigMap<any, any> = {
  addPerson: {
    type: GqlPerson,
    args: {
      ...personArgs
    },
    resolve(_, args) {
      return Person.create(<Person>{
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        phone: args.phone
      });
    }
  },
  updatePerson: {
    type: GqlPerson,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      ...personArgs
    },
    resolve(_, args): Promise<Person> {
      return Person.findOne<Person>({ where: { id: args.id } }).then(p => {
        if (p) {
          return p.update(<Person>{
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            phone: args.phone
          });
        }
        return p;
      });
    }
  }
};
