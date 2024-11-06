import CategoryRepository from "@/server/repositories/category.repository";
import Category from "@/server/domain/entities/category.entity";
import { CreateCategoryDto, FindCategoryDto, UpdateCategoryDto, DeleteCategoryDto } from "@/server/domain/repositories/category.dto";


const categoryRepository = new CategoryRepository();

export const createCategory = async (category: CreateCategoryDto) => {
    return await categoryRepository.create(category);
}

export const getCategories = async (category: FindCategoryDto) => {
    return await categoryRepository.find(category);
}

export const deleteCategory = async (category: DeleteCategoryDto) => {
    return await categoryRepository.delete(category);
}