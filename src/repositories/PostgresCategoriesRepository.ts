import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name)
    //throw new Error("Method not implemented.");
    return null;
  }
  list(): Category[] {
    return null;
    //throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO ): void {
    //throw new Error("Method not implemented.");
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
