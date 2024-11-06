import Category from "../entities/category.entity";
import { CreateCategoryDto, DeleteCategoryDto, FindCategoryDto, UpdateCategoryDto } from "./category.dto";

export interface ICategoryRepository {
    find({ id, ownerId }: FindCategoryDto): Promise<Category[]>;
    create(category: CreateCategoryDto): Promise<Category>;
    delete({ id }: DeleteCategoryDto): Promise<Category>;
}
