import Input from '../../../components/ui/Input';

interface NewsHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const NewsHeader = ({ searchTerm, onSearchChange }: NewsHeaderProps) => {
  return (
    <div className="flex items-center gap-4">
      <Input
        className='max-w-sm'
        placeholder="Search categories..."
        // icon={<MagnifyingGlassIcon className="h-4 w-4" />}
        value={searchTerm}
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
