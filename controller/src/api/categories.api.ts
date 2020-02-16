import { GraphQlHelper } from "../utils/graphQl.util";
import { Category } from "../models/category";

export class CategoriesApi {
  static GetCategories(): Promise<Category[]> {
    const query = GraphQlHelper.BuildQuery(`categories {
      id
      name
      description
    }`);

    return GraphQlHelper.Send(query).then(resp => {
      return resp.data.categories;
    });
  }
}
