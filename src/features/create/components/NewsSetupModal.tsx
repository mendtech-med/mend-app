import React, { useState, useEffect } from 'react';
import * as Select from '@radix-ui/react-select';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircledIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../../components/ui/Modal';
import Button from '../../../components/ui/button';
import Input from '../../../components/ui/input';
import { useFetchDropdowns } from '../hooks/useFetchDropdowns';
import { brandHandlers } from '../../../services/handlers/brand';
import { Text } from '@radix-ui/themes';
import { TextArea } from '../../../components/ui/TextArea';
import { newsHandlers } from '../../../services/handlers/news';
import { useRevalidator } from 'react-router-dom';
import AddButton from '../../../components/ui/AddButton';
import { useNavigate } from 'react-router-dom';

const NewsSetupModal: React.FC = () => {
  const {
    readers,
    categories,
    brands: initialBrands,
    loading,
  } = useFetchDropdowns();
  const [currentStep, setCurrentStep] = useState<
    'reader-category' | 'brand' | 'news-title'
  >('reader-category');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReader, setSelectedReader] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [brands, setBrands] = useState(initialBrands);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brandFormVisible, setBrandFormVisible] = useState(false);
  const [newBrand, setNewBrand] = useState({
    _id: '',
    brandVoiceName: '',
    content: '',
  });
  const [newsTitle, setNewsTitle] = useState('');
  const navigate = useNavigate();
  const revalidator = useRevalidator();

  useEffect(() => {
    setBrands(initialBrands);
  }, [initialBrands]);

  const handleCloseBrandForm = () => {
    setNewBrand({
      brandVoiceName: '',
      content: '',
      _id: '',
    });
    setBrandFormVisible(false);
  };

  const handleCreateBrand = async () => {
    try {
      const createdBrand = await brandHandlers.createBrand({
        userId: '203920',
        brandVoiceName: newBrand.brandVoiceName,
        content: newBrand.content,
      });
      setBrands([...brands, createdBrand.data]);
      handleCloseBrandForm();
    } catch (error) {
      console.error('Error creating brand:', error);
    }
  };

  const handleNext = () => {
    if (currentStep === 'reader-category') {
      if (!selectedReader || !selectedCategory) {
        alert('Please select both a reader and a category.');
        return;
      }
      setCurrentStep('brand');
    } else if (currentStep === 'brand') {
      if (!selectedBrand) {
        alert('Please select or create a brand.');
        return;
      }
      setCurrentStep('news-title');
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'reader-category':
        setIsOpen(false);
        break;
      case 'brand':
        if (brandFormVisible) {
          handleCloseBrandForm();
          return;
        }
        setCurrentStep('reader-category');
        break;
      case 'news-title':
        setCurrentStep('brand');
        break;
      default:
        break;
    }
  };

  const handleReset = (id?: string) => {
    setSelectedReader('');
    setSelectedCategory('');
    setSelectedBrand('');
    setNewBrand({ _id: '', brandVoiceName: '', content: '' });
    setNewsTitle('');

    setCurrentStep('reader-category');
    navigate(`/news/${id}`);
    setIsOpen(false);
  };

  const handleConfirm = async () => {
    try {
      const data = {
        newsTitle,
        brandId: selectedBrand,
        readerId: selectedReader,
        categoryId: selectedCategory,
        content : null
      };
      const res = await newsHandlers.createNews(data);
      revalidator.revalidate();
      setIsOpen(false);
      handleReset(res.data._id);
    } catch (error) {
      console.error('Error creating news:', error);
      alert('Failed to create news. Please try again.');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'reader-category':
        return (
          <div className="space-y-6">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select your reader
              </label>
              <Select.Root
                value={selectedReader}
                onValueChange={setSelectedReader}
              >
                <Select.Trigger className="inline-flex w-full items-center justify-between rounded-xl border border-theme-accent/20 bg-white py-2 px-3 text-sm shadow-sm focus:border-theme-main focus:outline-none focus:ring-1 focus:ring-theme-main">
                  <Select.Value placeholder="Reader" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content
                    className="overflow-hidden rounded-md bg-white shadow-lg z-50"
                    position="popper"
                    sideOffset={5}
                  >
                    <Select.ScrollUpButton className="flex h-6 items-center justify-center bg-white">
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    <Select.Viewport className="p-1">
                      <Select.Group>
                        {readers.map((reader) => (
                          <Select.Item
                            key={reader._id}
                            value={reader._id!}
                            className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                          >
                            <Select.ItemText>{reader.title}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-white">
                      <ChevronDownIcon />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select your category
              </label>
              <Select.Root
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                disabled={!selectedReader}
              >
                <Select.Trigger className="inline-flex w-full items-center justify-between rounded-xl border border-theme-accent/20 bg-white py-2 px-3 text-sm shadow-sm focus:border-theme-main focus:outline-none focus:ring-1 focus:ring-theme-main disabled:bg-gray-100 disabled:cursor-not-allowed">
                  <Select.Value placeholder="Category" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content
                    className="overflow-hidden rounded-md bg-white shadow-lg z-50"
                    position="popper"
                    sideOffset={5}
                  >
                    <Select.ScrollUpButton className="flex h-6 items-center justify-center bg-white">
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    <Select.Viewport className="p-1">
                      <Select.Group>
                        {categories.map((category) => (
                          <Select.Item
                            key={category._id}
                            value={category._id!}
                            className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                          >
                            <Select.ItemText>{category.title}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-white">
                      <ChevronDownIcon />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>
        );

      case 'brand':
        return (
          <div className="space-y-2">
            {brandFormVisible ? (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Brand Voice Name
                  </label>
                  <Input
                    className=""
                    placeholder="Enter brand voice name"
                    value={newBrand.brandVoiceName}
                    onChange={(e : React.ChangeEvent<HTMLInputElement>) =>
                      setNewBrand({
                        ...newBrand,
                        brandVoiceName: e.target.value,
                      })
                    }
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <TextArea
                    placeholder="Add your content here to analyze the brand voice"
                    value={newBrand.content}
                    onChange={(e : React.ChangeEvent<HTMLTextAreaElement>) =>
                      setNewBrand({ ...newBrand, content: e.target.value })
                    }
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-end justify-between">
                  <label className="block text-sm font-medium text-theme-base mb-1">
                    Select the brand voice for this news
                  </label>
                  <Button
                    size="md"
                    
                    className="gap-2 border-0 absolute top-7 right-20 not-selected"
                    onClick={() => setBrandFormVisible(true)}
                  >
                    <PlusIcon className="scale-125" />
                    <Text>Voice</Text>
                  </Button>
                </div>
                <Select.Root
                  value={selectedBrand}
                  onValueChange={setSelectedBrand}
                >
                  <Select.Trigger className="inline-flex w-full items-center justify-between rounded-xl border border-theme-accent/20 bg-white py-2 px-3 text-sm shadow-sm focus:border-theme-main focus:outline-none focus:ring-1 focus:ring-theme-main">
                    <Select.Value placeholder="Select Brand" />
                    <Select.Icon>
                      <ChevronDownIcon />
                    </Select.Icon>
                  </Select.Trigger>

                  <Select.Portal>
                    <Select.Content
                      className="overflow-hidden rounded-md bg-white shadow-lg z-50"
                      position="popper"
                      sideOffset={5}
                    >
                      <Select.ScrollUpButton className="flex h-6 items-center justify-center bg-white">
                        <ChevronUpIcon />
                      </Select.ScrollUpButton>

                      <Select.Viewport className="p-1">
                        <Select.Group>
                          {brands.map((brand) => (
                            <Select.Item
                              key={brand.brandVoiceName}
                              value={brand._id}
                              className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                              <Select.ItemText>
                                {brand.brandVoiceName}
                              </Select.ItemText>
                            </Select.Item>
                          ))}
                        </Select.Group>
                      </Select.Viewport>

                      <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-white">
                        <ChevronDownIcon />
                      </Select.ScrollDownButton>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </>
            )}
          </div>
        );

      case 'news-title':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter the title of the news
            </label>
            <Input
              value={newsTitle}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setNewsTitle(e.target.value)}
              placeholder="Enter News Title"
            />
          </div>
        );
    }
  };

  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <AddButton handleOpen={handleOpen} />
      <Modal isOpen={isOpen} onClose={handleReset} maxWidth="2xl">
        <ModalHeader className="pt-8">
          <h3 className="text-xl font-semibold text-theme-base">
            {currentStep === 'reader-category'
              ? `Reader's Persona`
              : currentStep === 'brand'
                ? 'Brand Voice'
                : 'News Title'}
          </h3>
        </ModalHeader>
        <ModalBody>{loading ? 'Loading...' : renderStepContent()}</ModalBody>
        <ModalFooter className="py-2 gap-3 rounded-2xl">
          {currentStep === 'news-title' ? (
            <Button
              className="bg-theme-main gap-2 group"
              onClick={handleConfirm}
            >
              Confirm
              <CheckCircledIcon />
            </Button>
          ) : (
            <>
              {!brandFormVisible && (
                <Button
                  onClick={handleNext}
                  disabled={!selectedReader || !selectedCategory}
                  className="bg-theme-main gap-2 group"
                >
                  Next
                  <ArrowRightIcon className="relative group-hover:left-1" />
                </Button>
              )}
            </>
          )}

          {brandFormVisible && (
            <Button
              className="bg-theme-main gap-2 group"
              onClick={handleCreateBrand}
            >
              <PlusIcon className="relative group-hover:scale-110" />
              Create
            </Button>
          )}

          <Button variant="secondary" className="gap-2" onClick={handleBack}>
            <ArrowLeftIcon />
            Back
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default NewsSetupModal;
