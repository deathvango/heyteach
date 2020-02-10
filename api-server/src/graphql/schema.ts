import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GqlPersonMutations } from "./mutations/gqlPerson.mutations";
import { GqlUserQueries } from "./queries/gqlUser.queries";
import { GqlPersonQueries } from "./queries/gqlPerson.queries";
import { GqlInstructor } from "./models/gqlInstructor";
import { GqlStudent } from "./models/gqlStudent";
import { GqlAddressQueries } from "./queries/gqlAddress.queries";
import { GqlCategoryQueries } from "./queries/gqlCategory.queries";
import { GqlCourseQueries } from "./queries/gqlCourse.queries";
import { GqlInstructorQueries } from "./queries/gqlInstructor.queries";
import { GqlLessonQueries } from "./queries/gqlLesson.queries";
import { GqlPeriodQueries } from "./queries/gqlPeriod.queries";
import { GqlStudentQueries } from "./queries/gqlStudent.queries";

const GqlQuery = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => {
    return {
      ...GqlAddressQueries,
      ...GqlCategoryQueries,
      ...GqlCourseQueries,
      ...GqlInstructorQueries,
      ...GqlLessonQueries,
      ...GqlPeriodQueries,
      ...GqlPersonQueries,
      ...GqlStudentQueries,
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
