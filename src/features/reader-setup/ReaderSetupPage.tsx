import { useLoaderData } from 'react-router-dom';
import { ReaderHeader } from './components/ReaderHeader';
import { ReaderGrid } from './components/ReaderGrid';
import { IContentClassification, ISuccess } from '../../services/api/types';
import { useSearch } from '../../hooks/useSearch';

const ReaderSetupPage = () => {
  const data = useLoaderData() as ISuccess<IContentClassification[]>;
  const { searchTerm, setSearchTerm, filteredData } =
    useSearch<IContentClassification>(data.data, [
      'title',
      'category',
      'categoryType',
    ]);

  return (
    <div className="p-6 space-y-6 ">
      <ReaderHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ReaderGrid readers={filteredData} />
    </div>
  );
};

export default ReaderSetupPage;
