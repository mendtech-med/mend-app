import { Input } from '../../../components/ui/Input';

interface ReaderHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const ReaderHeader = ({
  searchTerm,
  onSearchChange,
}: ReaderHeaderProps) => {
  return (
    <div className="flex items-center gap-4">
      <Input
        className='max-w-sm'
        placeholder="Search readers..."
        // icon={<MagnifyingGlassIcon className="h-4 w-4" />}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
