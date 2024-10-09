import React, { useState } from 'react';
import PersonaStep from './steps/persona-step';
import TitleStep from './steps/title-step';
import BrandVoiceStep from './steps/brand-voice-step';
import { BrandVoiceStepProps, PersonaStepProps, TitleStepProps, StepData } from './types';
import CreateBrandVoiceStep from './steps/create-brand-voice-step';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from 'react-query';
import axios from 'axios';
import { CreateProjectSchema } from '@/server/application/dto/project/create.dto';
import { useRouter } from 'next/navigation';
import { AudienceLevel, AudienceTarget, BrandVoice } from '@/constants/project';
import toast from 'react-hot-toast';



const CreateProjectSchemaWithoutOwner = CreateProjectSchema.omit({
  ownerId: true,
});

// Define the form validation schema with Zod
type CreateProjectFormValues = z.infer<typeof CreateProjectSchemaWithoutOwner>;



interface CreateBlogFormProps {
  onClose?: () => void;
  onSubmit?: (data: FormData) => void;
  onCreateBrandVoice?: () => void;
}

const CreateBlogForm = ({ onClose, onSubmit, onCreateBrandVoice }: CreateBlogFormProps) => {
  const [currentStep, setCurrentStep] = useState<number | 'createBrandVoice'>(1);
  const [forceRefetch, setForceRefetch] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // data 
  const [persona, setPersona] = useState<PersonaStepProps["data"]>({
    target: '',
    level: ''
  });

  const [title, setTitle] = useState<TitleStepProps["data"]>({
    title: ''
  });

  const [brandVoice, setBrandVoice] = useState<BrandVoiceStepProps["data"]>({
    id: '',
    name: ''
  });

  const router = useRouter();

  const mutation = useMutation((newProject: CreateProjectFormValues) => {
    return axios.post('/api/projects', newProject); // Adjust API endpoint
  });


  const handleNext = () => {
    if (currentStep !== "createBrandVoice" && currentStep < 3) setCurrentStep(currentStep + 1);
    else {
      setIsSubmitting(true);
      // Submit form
      console.log('Form submitted', { persona, brandVoice, title });
      // Reset form or close modal as needed

      // validate form
      const data: CreateProjectFormValues = {
        title: title.title,
        audience: {
          target: persona.target as AudienceTarget,
          level: persona.level as AudienceLevel,
          brandVoiceId: brandVoice.id
        }
      }

      mutation.mutate(data, {
        onSuccess: ({ data }) => {
          console.log("created project : ", data);
          toast.success('Project created successfully');
          // setIsSubmitting(false);
          router.push(`/project/${data.id}/editor?new=true`);
        },
        onError: (error: any) => {
          setIsSubmitting(false);
          // Handle error appropriately
          console.error('Error creating project:', error);
          toast.error('Something went wrong! Please try again');
          // Optionally, you can set an error state to display a message to the user
        },
      });

    }
  };

  const handleBack = () => {
    if (currentStep !== "createBrandVoice" && currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  const handleCreateBrandVoiceStep = () => {
    setCurrentStep('createBrandVoice');
  }

  const handleCreateBrandVoiceBack = () => {
    setForceRefetch(true);
    setCurrentStep(2);
  }




  const updateFormData = (field: string, value: string) => {

    switch (currentStep) {
      case 1:
        setPersona({ ...persona, [field]: value });
        break;
      case 2:
        setBrandVoice({ ...brandVoice, [field]: value });
        break;
      case 3:
        setTitle({ ...title, [field]: value });
        break;
      case 'createBrandVoice':
        break;
      default:
        break;
    }

  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonaStep
            data={persona}
            updateFormData={updateFormData}
            handleNext={handleNext}
            handleBack={handleBack}
            handleCancel={handleCancel}
          />
        );
      case 2:
        return (
          <BrandVoiceStep
            data={brandVoice}
            updateFormData={updateFormData}
            handleNext={handleNext}
            handleBack={handleBack}
            handleCancel={handleCancel}
            handleCreateBrandVoiceStep={handleCreateBrandVoiceStep}
            forceRefetch={forceRefetch}
          />
        );
      case 3:
        return (<TitleStep
          data={title}
          updateFormData={updateFormData}
          handleNext={handleNext}
          handleBack={handleBack}
          handleCancel={handleCancel}
          isSubmitting={isSubmitting}
        />

        );
      case 'createBrandVoice':
        return (<CreateBrandVoiceStep handleCreateBrandVoiceBack={handleCreateBrandVoiceBack} handleCreateBrandVoiceCancel={handleCreateBrandVoiceBack} />);
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default CreateBlogForm;
