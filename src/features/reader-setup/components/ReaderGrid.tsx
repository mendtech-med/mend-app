import { IContentClassification } from '../../../services/api/types';
import { ReaderCard } from './ReaderCard';
import ReaderSetupModal from './ReaderSetupModal';

interface ReaderGridProps {
  readers: IContentClassification[];
}

export const ReaderGrid = ({ readers }: ReaderGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ReaderSetupModal />
      {readers?.map((reader) => (
        <ReaderCard key={reader._id} reader={reader} />
      ))}
    </div>
  );
};
