import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GqlPersonMutations } from "./mutations/gqlPersonMutations";
import { GqlUserQueries } from "./queries/gqlUserQueries";
import { GqlPersonQueries } from "./queries/gqlPersonQueries";

const GqlQuery = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => {
    return {
      ...GqlPersonQueries,
      ...GqlUserQueries
    };
  }
});

const GqlMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Functions to create stuff",
  fields: () => ({
    ...GqlPersonMutations
  })
});

const HeyTeachGqlSchema = new GraphQLSchema({
  query: GqlQuery,
  mutation: GqlMutation
});

export default HeyTeachGqlSchema;
