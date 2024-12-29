import { Input } from '../../../components/ui/Input';

interface CategoryHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const CategoryHeader = ({
  searchTerm,
  onSearchChange,
}: CategoryHeaderProps) => {
  return (
    <div className="flex items-center gap-4">
      <Input
        className='max-w-sm'
        placeholder="Search categories..."
        // icon={<MagnifyingGlassIcon className="h-4 w-4" />}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
