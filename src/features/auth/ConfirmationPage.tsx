import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LogoSVG } from '../../assets/images/svgs';
import { Heading, Text } from '@radix-ui/themes';
import { Input } from '../../components/ui/Input';
import { authHandlers } from '../../services/handlers/auth';

const OTPPage: React.FC = () => {
  const { state: userEmail } = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpError, setOtpError] = useState('');

  const onConfirmOTP = async () => {
    if (otp.trim() === '' || otp.length !== 6) {
      setOtpError('Please enter a valid 6-digit OTP');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await authHandlers.confirmRegistration({
        email: userEmail,
        confirmationCode: otp,
      });

      if (result.success) {
        toast.success(result.message);
        navigate('/');
      }
    } catch (err) {
      const error = err as { response: { data: { message: string } } };
      console.error(error.response.data.message);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
        return;
      }

      toast.error('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChangeOTP = (value: string) => {
    setOtp(value);
    setOtpError('');
  };

  const resendOTP = async () => {
    try {
      const result = await authHandlers.resendConfirmationCode({
        email: userEmail,
      });

      if (result.success) {
        toast.success(result.message);
      }
    } catch (err) {
      const error = err as { response: { data: { message: string } } };
      console.error(error.response.data.message);
      if (error.response.data.message) {
        toast.error(error.response.data.message);
        return;
      }

      toast.error('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {isSubmitting && (
        <div className="text-center text-lg text-theme-base">Verifying...</div>
      )}

      <div className="flex flex-col flex-1 justify-center items-center space-y-5">
        <header className="h-12 px-4 flex items-center">
          <img src={LogoSVG} alt="Company logo" className="h-8" />
        </header>
        <div className="w-full max-w-md bg-white p-6 border rounded-lg">
          <Heading size={'6'} weight={'medium'}>
            OTP Confirmation
          </Heading>

          <div className="space-y-4 mt-5">
            {/* OTP Field */}
            <div>
              <Text as="label" weight="medium" size={'2'}>
                Enter OTP
              </Text>
              <Input
                id="otp"
                type="text"
                placeholder="Enter your 6-digit OTP"
                value={otp}
                onChange={(e) => onChangeOTP(e.target.value)}
              />
              {otpError && (
                <p className="text-sm text-theme-base">{otpError}</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <button
                className="text-theme-main text-sm cursor-pointer"
                onClick={resendOTP}
              >
                <Text as="label" weight="medium" size={'2'}>
                  Resend OTP
                </Text>
              </button>
              <button
                className="bg-theme-main text-white px-4 py-2 rounded-lg hover:bg-theme-accent"
                onClick={onConfirmOTP}
                disabled={isSubmitting}
              >
                <Text as="label" weight="medium" size={'2'}>
                  Confirm OTP
                </Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
