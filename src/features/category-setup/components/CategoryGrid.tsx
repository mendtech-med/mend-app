import { IContentClassification } from '../../../services/api/types';
import { CategoryCard } from './CategoryCard';
import CategorySetupModal from './CategorySetupModal';

interface CategoryGridProps {
  categories: IContentClassification[];
}

export const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CategorySetupModal />
      {categories?.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
};
