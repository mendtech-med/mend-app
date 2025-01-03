import { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../../components/ui/Modal';
import Button from '../../../components/ui/button';
import { CATEGORIES } from '../constants';
import ReaderSelector from './ReaderSelector';
import FieldValueSelector from './FieldValueSelector';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircledIcon,
} from '@radix-ui/react-icons';

import {
  MARKET_NEWS,
  CORPORATE_FINANCE_NEWS,
  ECONOMIC_INDICATOR_NEWS,
  CENTRAL_BANK_AND_MONETARY_POLICY_NEWS,
  GOVERNMENT_FISCAL_POLICY_NEWS,
  INDUSTRY_SPECIFIC_FINANCIAL_NEWS,
  INTERNATIONAL_TRADE_AND_GLOBAL_NEWS,
  PERSONAL_FINANCE_NEWS,
  REGULATORY_AND_LEGAL_NEWS,
  CRYPTOCURRENCY_AND_BLOCKCHAIN_NEWS,
  INVESTMENT_AND_ASSET_MANAGEMENT_NEWS,
  RISK_MANAGEMENT_AND_INSURANCE_NEWS,
  FINANCIAL_EDUCATION_AND_LITERACY_NEWS,
  SUSTAINABLE_FINANCE_AND_ESG_NEWS,
  FINANCIAL_TECHNOLOGY_FINTECH_NEWS,
} from '../constants';
import { readerHandlers } from '../../../services/handlers/reader';
import { useRevalidator } from 'react-router-dom';
import AddButton from '../../../components/ui/AddButton';

interface FieldValues {
  [key: string]: string[];
}

const ReaderSetupModal = () => {
  const revalidator = useRevalidator();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedReader, setSelectedReader] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [currentStep, setCurrentStep] = useState<'selector' | 'fields'>(
    'selector'
  );
  const [confirmedReader, setConfirmedReader] = useState('');
  const [fieldValues, setFieldValues] = useState<FieldValues>({});

  const getFieldsList = (Reader: string) => {
    switch (Reader) {
      case 'market_news':
        return MARKET_NEWS;
      case 'corporate_finance_news':
        return CORPORATE_FINANCE_NEWS;
      case 'economic_indicators':
        return ECONOMIC_INDICATOR_NEWS;
      case 'central_bank_and_monetary_policy_news':
        return CENTRAL_BANK_AND_MONETARY_POLICY_NEWS;
      case 'government_fiscal_policy_news':
        return GOVERNMENT_FISCAL_POLICY_NEWS;
      case 'industry_specific_financial_news':
        return INDUSTRY_SPECIFIC_FINANCIAL_NEWS;
      case 'international_trade_and_global_economy_news':
        return INTERNATIONAL_TRADE_AND_GLOBAL_NEWS;
      case 'personal_finance_news':
        return PERSONAL_FINANCE_NEWS;
      case 'regulatory_and_legal_news':
        return REGULATORY_AND_LEGAL_NEWS;
      case 'cryptocurrency_and_blockchain_news':
        return CRYPTOCURRENCY_AND_BLOCKCHAIN_NEWS;
      case 'investment_and_asset_management_news':
        return INVESTMENT_AND_ASSET_MANAGEMENT_NEWS;
      case 'risk_management_and_insurance_news':
        return RISK_MANAGEMENT_AND_INSURANCE_NEWS;
      case 'financial_technology_news':
        return FINANCIAL_TECHNOLOGY_FINTECH_NEWS;
      case 'sustainable_finance_and_esg_news':
        return SUSTAINABLE_FINANCE_AND_ESG_NEWS;
      case 'financial_education_and_literacy_news':
        return FINANCIAL_EDUCATION_AND_LITERACY_NEWS;
      default:
        return [];
    }
  };

  const handleConfirmSelector = () => {
    setCurrentStep('fields');
    setConfirmedReader(selectedReader);
  };

  const handleReset = () => {
    setCurrentStep('selector');
    setSelectedTitle('');
    setSelectedReader('');
    setSelectedSubcategory('');
    setConfirmedReader('');
    setFieldValues({});
  };

  const handleFieldChange = (fieldName: string, values: string[]) => {
    setFieldValues((prev) => ({
      ...prev,
      [fieldName]: values,
    }));
  };

  const handleClose = async () => {
    try {
      if (currentStep === 'fields') {
        const result = await readerHandlers.createReader({
          title: selectedTitle,
          categoryType: confirmedReader?.split('_').join(' '),
          category: selectedSubcategory?.split('_').join(' '),
          preferences: fieldValues,
        });
        revalidator.revalidate();
        console.log(result.message);
      }
      setIsOpen(false);
      handleReset();
    } catch (err) {
      const error = err as {
        message: string;
        response: {
          data: { message: string }
        }
      }
      console.log(error);
      if(error.response.data.message){
        return alert(error.response.data.message);
      }
      alert(error.message);
    }
  };

  const fieldsList = getFieldsList(confirmedReader);

  const getStepTitle = () => {
    switch (currentStep) {
      case 'selector':
        return 'Select News Type and Reader';
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
            <ReaderSelector
              categories={CATEGORIES}
              selectedTitle={selectedTitle}
              selectedReader={selectedReader}
              selectedSubcategory={selectedSubcategory}
              onTitleChange={setSelectedTitle}
              onReaderChange={(Reader) => {
                setSelectedReader(Reader);
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

        <ModalFooter className="py-2 gap-3 rounded-2xl">
          {currentStep === 'selector' && (
            <>
              <Button
                onClick={handleConfirmSelector}
                variant="primary"
                disabled={!selectedReader || !selectedSubcategory}
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

export default ReaderSetupModal;
