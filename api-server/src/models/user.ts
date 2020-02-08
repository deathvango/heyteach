import {
  GraphQLSchema,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLObjectType
} from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    }
  }
});
