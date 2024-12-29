import { useState, useEffect } from 'react';
import { readerHandlers } from '../../../services/handlers/reader';
import { categoryHandlers } from '../../../services/handlers/category';
import { brandHandlers } from '../../../services/handlers/brand';
import { IBrand, IContentClassification } from '../../../services/api/types';

export const useFetchDropdowns = () => {
  const [readers, setReaders] = useState<IContentClassification[]>([]);
  const [categories, setCategories] = useState<IContentClassification[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [readersRes, categoriesRes, brandsRes] = await Promise.all([
          readerHandlers.getAllReaders(),
          categoryHandlers.getAllCategories(),
          brandHandlers.getAllBrands(),
        ]);

        setReaders(readersRes.data);
        setCategories(categoriesRes.data);
        setBrands(brandsRes.data);
      } catch (error) {
        console.error('Failed to fetch dropdowns', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { readers, categories, brands, loading };
};
