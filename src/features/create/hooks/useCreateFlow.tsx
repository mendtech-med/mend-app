import { useState } from 'react';
import axios from '../../../services/api/axios';

export const useCreateFlow = () => {
  const [step, setStep] = useState(1);
  const [selectedReader, setSelectedReader] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [newsTitle, setNewsTitle] = useState('');

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitCreate = async () => {
    try {
      const payload = {
        reader: selectedReader,
        category: selectedCategory,
        brand: selectedBrand,
        newsTitle,
      };

      const response = await axios.post('/create', payload);
      return response.data;
    } catch (error) {
      console.error('Create failed', error);
      throw error;
    }
  };

  return {
    step,
    nextStep,
    prevStep,
    selectedReader,
    setSelectedReader,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    newsTitle,
    setNewsTitle,
    submitCreate,
  };
};
