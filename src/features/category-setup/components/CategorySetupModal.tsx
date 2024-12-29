import { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../../components/ui/Modal';
import Button from '../../../components/ui/button';
import { CATEGORIES } from '../constants';
import CategorySelector from './CategorySelector';
import FieldValueSelector from './FieldValueSelector';
import {
  MARKET_NEWS,
  CORPORATE_FINANCE_NEWS,
  ECONOMIC_INDICATORS,
  CENTRAL_BANK_AND_MONETART_POLICY_NEWS,
  GOVERNMENT_FISCAL_POLICY_NEWS,
  INDUSTRY_SPECIFIC_FINANCIAL_NEWS,
  INTERNAL_TRADE_AND_GLOBAL_ECONOMY_NEWS,
  PERSONAL_FINANCE_NEWS,
  REGULATORY_AND_LEGAL_NEWS,
  CRYPTOCURRENCY_AND_BLOCKCHAIN_NEWS,
  INVESTMENT_AND_ASSET_MANAGEMENT_NEWS,
  RISK_MANAGMENT_AND_INSURANCE_NEWS,
  FINANCIAL_TECHNOLOGY_FINTECH_NEWS,
  SUSTAINABLE_FINANCE_AND_ESG_NEWS,
  FINANCIAL_AND_EDUCATION_LITERACY_NEWS,
} from '../constants';
import { categoryHandlers } from '../../../services/handlers/category';
import { useRevalidator } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircledIcon,
} from '@radix-ui/react-icons';
import AddButton from '../../../components/ui/AddButton';

interface FieldValues {
  [key: string]: string[];
}

const CategorySetupModal = () => {
  const revalidator = useRevalidator();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [currentStep, setCurrentStep] = useState<'selector' | 'fields'>(
    'selector'
  );
  const [confirmedCategory, setConfirmedCategory] = useState('');
  const [fieldValues, setFieldValues] = useState<FieldValues>({});

  const getFieldsList = (category: string) => {
    switch (category) {
      case 'market_news':
        return MARKET_NEWS;
      case 'corporate_finance':
        return CORPORATE_FINANCE_NEWS;
      case 'economic_indicators':
        return ECONOMIC_INDICATORS;
      case 'central_bank_news':
        return CENTRAL_BANK_AND_MONETART_POLICY_NEWS;
      case 'fiscal_policy_news':
        return GOVERNMENT_FISCAL_POLICY_NEWS;
      case 'industry_specific_news':
        return INDUSTRY_SPECIFIC_FINANCIAL_NEWS;
      case 'international_trade_news':
        return INTERNAL_TRADE_AND_GLOBAL_ECONOMY_NEWS;
      case 'personal_finance':
        return PERSONAL_FINANCE_NEWS;
      case 'regulatory_legal_news':
        return REGULATORY_AND_LEGAL_NEWS;
      case 'crypto_blockchain_news':
        return CRYPTOCURRENCY_AND_BLOCKCHAIN_NEWS;
      case 'investment_asset_management':
        return INVESTMENT_AND_ASSET_MANAGEMENT_NEWS;
      case 'risk_management_insurance':
        return RISK_MANAGMENT_AND_INSURANCE_NEWS;
      case 'fintech_news':
        return FINANCIAL_TECHNOLOGY_FINTECH_NEWS;
      case 'sustainable_finance':
        return SUSTAINABLE_FINANCE_AND_ESG_NEWS;
      case 'financial_education':
        return FINANCIAL_AND_EDUCATION_LITERACY_NEWS;
      default:
        return [];
    }
  };

  const handleConfirmSelector = () => {
    setCurrentStep('fields');
    setConfirmedCategory(selectedCategory);
  };

  const handleReset = () => {
    setCurrentStep('selector');
    setSelectedTitle('');
    setSelectedCategory('');
    setSelectedSubcategory('');
    setConfirmedCategory('');
    setFieldValues({});
  };

  const handleClose = async () => {
    try {
      if (currentStep === 'fields') {
        const result = await categoryHandlers.createCategory({
          title: selectedTitle?.split('_').join(' '),
          categoryType: confirmedCategory?.split('_').join(' '),
          category: selectedSubcategory?.split('_').join(' '),
          preferences: fieldValues,
        });
        revalidator.revalidate();
        console.log(result.message);
      }

      setIsOpen(false);
      handleReset();
    } catch (error) {
      console.log(error);
      alert('error');
    }
  };

  const handleFieldChange = (fieldName: string, values: string[]) => {
    setFieldValues((prev) => ({
      ...prev,
      [fieldName]: values,
    }));
  };

  const fieldsList = getFieldsList(confirmedCategory);

  const getStepTitle = () => {
    switch (currentStep) {
      case 'selector':
        return 'Select News Type and Category';
      case 'fields':
        return 'Set Your Preferences';
      default:
        return '';
    }
  };

  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <AddButton handleOpen={handleOpen} />

      <Modal isOpen={isOpen} onClose={handleClose} maxWidth="2xl">
        <ModalHeader className="pt-8">
          <h3 className="text-xl font-semibold text-theme-base">
            {getStepTitle()}
          </h3>
        </ModalHeader>

        <ModalBody className="max-h-96 overflow-auto">
          {currentStep === 'selector' && (
            <CategorySelector
              categories={CATEGORIES}
              selectedTitle={selectedTitle}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onTitleChange={setSelectedTitle}
              onCategoryChange={(category) => {
                setSelectedCategory(category);
                setSelectedSubcategory('');
                setFieldValues({});
              }}
              onSubcategoryChange={setSelectedSubcategory}
            />
          )}
          {currentStep === 'fields' && (
            <FieldValueSelector
              fields={fieldsList}
              fieldValues={fieldValues}
              onFieldChange={handleFieldChange}
            />
          )}
        </ModalBody>

        <ModalFooter className="gap-3">
          {currentStep === 'selector' && (
            <>
              <Button
                onClick={handleConfirmSelector}
                variant="primary"
                disabled={!selectedCategory || !selectedSubcategory}
                className="bg-theme-main gap-2 group"
              >
                Next
                <ArrowRightIcon className="relative group-hover:left-1" />
              </Button>
              <Button onClick={handleClose} variant="secondary">
                Cancel
              </Button>
            </>
          )}
          {currentStep === 'fields' && (
            <>
              <Button
                onClick={handleClose}
                variant="primary"
                disabled={Object.keys(fieldValues).length === 0}
                className="bg-theme-main gap-2 group"
              >
                Confirm
                <CheckCircledIcon />
              </Button>
              <Button
                onClick={() => setCurrentStep('selector')}
                variant="secondary"
                className="gap-2"
              >
                <ArrowLeftIcon />
                Back
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CategorySetupModal;
