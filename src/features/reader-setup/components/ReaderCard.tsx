import { useState } from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';
import { ReaderViewDialog } from './ReaderViewDialog';
import { ReaderCardMenuPopover } from './ReaderCardMenuPopover';
import { IContentClassification } from '../../../services/api/types';
import { readerHandlers } from '../../../services/handlers/reader';
import { useRevalidator } from 'react-router-dom';
interface ReaderCardProps {
  reader: IContentClassification;
}

export const ReaderCard = ({ reader }: ReaderCardProps) => {
  const revalidator = useRevalidator();
  const [showViewDialog, setShowViewDialog] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this reader?')) {
      try {
        const deleteCategory = await readerHandlers.deleteReader(reader._id!);
        revalidator.revalidate();
        alert(deleteCategory.message);
      } catch (error) {
        console.error('Error deleting reader:', error);
      }
    }
  };

  return (
    <>
      <div className="!rounded-2xl border !border-white group relative flex-1 w-full h-36 p-4 bg-white overflow-hidden transition-shadow">
        {/* Rest of the component remains the same */}
        <div className="mb-2 h-full flex flex-col justify-between">
          <Flex direction="column">
            <Heading
              mb="2"
              size="3"
              className="capitalize !font-normal text-theme-main"
            >
              {reader.title}
            </Heading>
            <Heading mb="1" size="2" className="capitalize !font-normal">
              {reader.category}
            </Heading>
            <Text size="1" className="text-sm text-theme-accent capitalize">
              {reader.categoryType}
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
              }).format(new Date(reader.updatedAt!))}

            </Text>
            <ReaderCardMenuPopover
              onView={() => setShowViewDialog(true)}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>

      <ReaderViewDialog
        open={showViewDialog}
        onOpenChange={setShowViewDialog}
        reader={reader}
      />
    </>
  );
};
