import { categoryHandlers } from '../../../services/handlers/category';

export const categoryLoader = async () => {
  try {
    const categories = await categoryHandlers.getAllCategories();
    return categories;
  } catch (error) {
    console.log(error);
    return null;
  }
};
