import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { IContentClassification } from '../../../services/api/types';

interface CategoryViewDialogProps {
  category: IContentClassification;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CategoryViewDialog = ({
  category,
  open,
  onOpenChange,
}: CategoryViewDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <Dialog.Title className="text-xl font-semibold mb-4 capitalize">
            {category.category}
          </Dialog.Title>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Category Type</h3>
              <p className="text-gray-600 capitalize">
                {category.categoryType}
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Preferences</h3>
              {Object.entries(category.preferences).map(([group, items]) => (
                <div key={group} className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2 capitalize">
                    {group.replace(/_/g, ' ')}
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Dialog.Close className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full">
            <Cross2Icon className="w-4 h-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
