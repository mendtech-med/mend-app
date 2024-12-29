import { newsHandlers } from '../../../services/handlers/news';

export const newsLoader = async () => {
  try {
    const news = await newsHandlers.getAllNews();
    return news;
  } catch (error) {
    console.log(error);
    return null;
  }
};
