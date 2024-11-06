

interface CategoryItem {
    name: string;
    selections: string[];
}


interface Category {
    id: string;
    type: string;
    catagory: string;
    items: CategoryItem[];
    createdAt: Date;
    updatedAt: Date;
}

export default Category;