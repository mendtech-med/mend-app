import { useLoaderData } from 'react-router-dom';
import { NewsHeader } from './components/NewsHeader';
import { NewsGrid } from './components/NewsGrid';
import { INews, ISuccess } from '../../services/api/types';
import { useSearch } from '../../hooks/useSearch';

const CategorySetupPage = () => {
  const data = useLoaderData() as ISuccess<INews[]>;
  const { searchTerm, setSearchTerm, filteredData } = useSearch<INews>(
    data.data,
    ['newsTitle']
  );

  return (
    <div className="p-6 space-y-6 ">
      <NewsHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <NewsGrid newsData={filteredData} />
    </div>
  );
};

export default CategorySetupPage;
