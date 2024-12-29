import { useState, useMemo } from 'react';

export const useSearch = <T extends object>(
  initialData: T[],
  searchFields: (keyof T)[]
) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) return initialData;

    return initialData.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false; // Skip non-string fields
      })
    );
  }, [initialData, searchTerm, searchFields]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
};
