import Category from "../domain/entities/category.entity";
import { CreateCategoryDto, FindCategoryDto, UpdateCategoryDto, DeleteCategoryDto } from "../domain/repositories/category.dto";
import { ICategoryRepository } from "../domain/repositories/category.interface";
import prisma from "../infrastructure/database/prisma.infra";

class CategoryRepository implements ICategoryRepository {
    async create(category: CreateCategoryDto): Promise<Category> {
        const createdCategory = await prisma.category.create({
            data: {
                category: category.catagory,
                type: category.type,
                items: {
                    createMany: {
                        data: category.items
                    }
                },
                ownerId: category.ownerId,

            },
            include: {
                items: true,
            }
        });
        return {
            catagory: createdCategory.category,
            type: createdCategory.type,
            items: createdCategory.items,
            createdAt: createdCategory.createdAt,
            updatedAt: createdCategory.updatedAt,
            id: createdCategory.id
        } as Category;
    }




    async find({ id, ownerId }: FindCategoryDto): Promise<Category[]> {
        const foundCategorys = await prisma.category.findMany({
            where: {
                ownerId,
                id
            },
            include: {
                items: true
            }
        });

        return foundCategorys.map(category => ({
            id: category.id,
            catagory: category.category,
            type: category.type,
            items: category.items,
            createdAt: category.createdAt,
            updatedAt: category.updatedAt
        }) as Category);
    }

    async delete({ id }: DeleteCategoryDto): Promise<Category> {
        const deletedCategory = await prisma.category.delete({
            where: {
                id
            },
            include: {
                items: true
            }
        });
        return {
            catagory: deletedCategory.category,
            type: deletedCategory.type,
            items: deletedCategory.items,
            createdAt: deletedCategory.createdAt,
            updatedAt: deletedCategory.updatedAt,
            id: deletedCategory.id
        } as Category;
    }

}


export default CategoryRepository;