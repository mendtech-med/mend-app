import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Modal = ({ isOpen, onClose, children, maxWidth = 'lg' }: ModalProps) => {
  const maxWidthClasses = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-500/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        {/* Flex container changed to align the modal at the top-center */}
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog.Content
            className={`relative z-50 grid w-full gap-0 rounded-2xl bg-white p-0 shadow-lg duration-200 
      data-[state=open]:animate-in data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
      data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
      sm:rounded-lg ${maxWidthClasses[maxWidth]}`}
          >
            <Cross2Icon
              className="absolute top-5 right-5 w-5 h-5 cursor-pointer"
              onClick={onClose}
            />
            {children}
          </Dialog.Content>
        </div>

      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
}

const ModalHeader = ({ children, className = '' }: ModalHeaderProps) => (
  <div className={`px-4 py-3 sm:px-6 ${className}`}>{children}</div>
);

const ModalBody = ({ children, className = '' }: ModalHeaderProps) => (
  <div className={`px-4 py-4 mb-5 sm:px-6 ${className}`}>{children}</div>
);

const ModalFooter = ({ children, className = '' }: ModalHeaderProps) => (
  <div
    className={`px-4 py-3 mb-2 sm:flex sm:flex-row-reverse sm:px-6 ${className}`}
  >
    {children}
  </div>
);

export { Modal, ModalHeader, ModalBody, ModalFooter };
