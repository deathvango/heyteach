import Axios from "axios";
import { ApiGlobals } from "../api/globals.api";
import { User } from "../models/user";
import { Course } from "../models/course";
import { Category } from "../models/category";

export interface GQLR {
  data: {
    users: User[];
    courses: Course[];
    categories: Category[];
  };
  errors: {
    message: string;
    locations: {
      line: number;
      column: number;
    }[];
  }[];
}

export const GraphQlHelper = {
  BuildQuery(body: string) {
    return `query {
      ${body}
    }`;
  },
  Send: (request: string): Promise<GQLR> => {
    return Axios.post<GQLR>(ApiGlobals.graphQlEndpoint, {
      query: request,
    }).then(resp => {
      return resp.data;
    });
  },
};
