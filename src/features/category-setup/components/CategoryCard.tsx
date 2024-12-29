import { useState } from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';
import { CategoryCardMenuPopover } from './CategoryCardMenuPopover'; // Import the new component
import { IContentClassification } from '../../../services/api/types';
import { categoryHandlers } from '../../../services/handlers/category';
import { useRevalidator } from 'react-router-dom';
import { CategoryViewDialog } from './CategoryViewDialog';

interface CategoryCardProps {
  category: IContentClassification;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const revalidator = useRevalidator();
  const [showViewDialog, setShowViewDialog] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const deleteCategory = await categoryHandlers.deleteCategory(
          category._id!
        );
        revalidator.revalidate();
        alert(deleteCategory.message);
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  return (
    <>
      <div className="!rounded-2xl border !border-white group relative flex-1 w-full h-36 p-4 bg-white overflow-hidden transition-shadow">
        <div className="mb-2 h-full flex flex-col justify-between">
          <Flex direction="column">
            <Heading
              mb="2"
              size="3"
              className="capitalize !font-normal text-theme-main"
            >
              {category.title}
            </Heading>
            <Heading mb="1" size="2" className="capitalize !font-normal">
              {category.category}
            </Heading>
            <Text size="2" className="text-sm text-theme-accent capitalize">
              {category.categoryType}
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
              }).format(new Date(category.updatedAt!))}

            </Text>
            <CategoryCardMenuPopover
              onView={() => setShowViewDialog(true)}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>

      <CategoryViewDialog
        open={showViewDialog}
        onOpenChange={setShowViewDialog}
        category={category}
      />
    </>
  );
};
