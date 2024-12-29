import { useLoaderData } from 'react-router-dom';
import { CategoryHeader } from './components/CategoryHeader';
import { CategoryGrid } from './components/CategoryGrid';
import { IContentClassification, ISuccess } from '../../services/api/types';
import { useSearch } from '../../hooks/useSearch';

const CategorySetupPage = () => {
  const data = useLoaderData() as ISuccess<IContentClassification[]>;
  const { searchTerm, setSearchTerm, filteredData } =
    useSearch<IContentClassification>(data.data, [
      'title',
      'category',
      'categoryType',
    ]);

  return (
    <div className="p-6 space-y-6 ">
      <CategoryHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryGrid categories={filteredData} />
    </div>
  );
};

export default CategorySetupPage;
