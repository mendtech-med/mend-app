import { Flex, Heading, Text } from '@radix-ui/themes';
import { INews } from '../../../services/api/types';
import { useNavigate, useRevalidator } from 'react-router-dom';
import { newsHandlers } from '../../../services/handlers/news';
import { NewsCardMenuPopover } from './NewsCardMenuPopover';

interface NewsCardProps {
  news: INews;
  fromTrustBucketPage : boolean;
}

export const NewsCard = ({ news, fromTrustBucketPage }: NewsCardProps) => {
  const revalidator = useRevalidator();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this news?')) {
      try {
        const deleteCategory = await newsHandlers.deleteNews(news._id!);
        revalidator.revalidate();
        alert(deleteCategory.message);
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  const onClick = () => {
    console.log(fromTrustBucketPage)
    navigate(`/news/${news._id}`);
  };
  return (
    <>
      <div className="rounded-lg hover:shadow-main shadow-main group relative flex-1 w-full h-36 box-border p-4 bg-white shadow-slate-300 overflow-hidden cursor-pointer">
        <div className="mb-2 h-full w-full">
          <Flex direction="column" onClick={onClick}>
            <Heading
              mb="2"
              size="4"
              className="capitalize !font-normal text-theme-main truncate line-clamp-1"
            >
              {news.newsTitle}
            </Heading>

            <Text size="2" className="block text-sm text-theme-accent">
              {news.brandId.title}
            </Text>
            <Text size="2" className="block text-sm text-theme-accent">
              {news.readerId.title}
            </Text>
            <Text size="2" className="block text-sm text-theme-accent">
              {news.categoryId.title}
            </Text>
          </Flex>

          {/* Popover menu */}
          <div className="flex items-center justify-between">
            <Text className="text-xs text-gray-400">
              {new Intl.DateTimeFormat('en-US', {
                month: 'numeric', // Numeric month (e.g., "12")
                day: 'numeric',   // Numeric day (e.g., "3")
                year: 'numeric',  // Numeric year (e.g., "2024")
                hour: '2-digit',  // Two-digit hour (e.g., "10")
                minute: '2-digit', // Two-digit minute (e.g., "30")
                hour12: true      // 12-hour format with AM/PM
              }).format(new Date(news.updatedAt!))}

            </Text>
            <NewsCardMenuPopover onArchive={() => { }} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
};
