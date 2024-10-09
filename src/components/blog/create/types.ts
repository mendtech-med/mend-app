// components/MultiStepForm/types.ts

import { IconType } from 'react-icons';

export interface StepData {
  title: string;
  icon: IconType;
  description: string;
  selectLabel: string;
  selectOptions: string[];
  textLabel: string;
}

interface BaseStepProps {
  updateFormData: (field: string, value: string) => void;
  handleNext: () => void;
  handleBack: () => void;
  handleCancel: () => void;
  handleCreateBrandVoiceStep?: () => void;
  forceRefetch?: boolean;
}


export interface PersonaStepProps extends BaseStepProps {
  data: {
    target: string;
    level: string;
  };
}

export interface TitleStepProps extends BaseStepProps {
  data: {
    title: string;
  };
  isSubmitting: boolean;
}

export interface BrandVoiceStepProps extends BaseStepProps {
  data: {
    id: string;
    name: string;
  };
}
