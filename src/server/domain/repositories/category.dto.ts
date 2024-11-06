

interface CategoryItem {
    name: string;
    selections: string[];
}

interface UpdateCategoryDto {
    id: string;
    type?: string;
    catagory?: string;
    items?: CategoryItem[];
    ownerId?: string;
};

type CreateCategoryDto = {
    type: string;
    catagory: string;
    items: CategoryItem[];
    ownerId: string;
};

type FindCategoryDto = {
    ownerId?: string;
    id?: string;
};

type DeleteCategoryDto = {
    id: string;
};

export type { CreateCategoryDto, UpdateCategoryDto, FindCategoryDto, DeleteCategoryDto };