import { User } from "../models/user";
import { GraphQlHelper } from "../utils/graphQl.util";

export class UsersApi {
  static GetUsers(): Promise<User[]> {
    const query = GraphQlHelper.BuildQuery(`users {
      id
      username
    }`);

    return GraphQlHelper.Send(query).then(resp => {
      return resp.data.users;
    });
  }
}
