import { INews } from '../../../services/api/types';
import { NewsCard } from './NewsCard';
import NewsSetupModal from './NewsSetupModal';

interface NewsGridProps {
  newsData: INews[];
}

export const NewsGrid = ({ newsData }: NewsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <NewsSetupModal />

      {newsData?.map((news) => <NewsCard key={news._id} news={news} fromTrustBucketPage={false}/>)}
    </div>
  );
};
