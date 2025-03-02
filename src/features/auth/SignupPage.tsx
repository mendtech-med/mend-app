import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { authHandlers } from '../../services/handlers/auth';
import { emailRegex, passwordRegex } from '../../libs/constants';
import toast from 'react-hot-toast';
import { LogoSVG } from '../../assets/images/svgs';
import { Heading, Spinner, Text } from '@radix-ui/themes';
import Input from '../../components/ui/input';
import { handleRedirect } from '../../libs/utils/handleRedirect';

const verifyQuery = (searchParams: URLSearchParams) => {
  const planQuery = ['pro', 'collaborate', 'enterprise'].includes(searchParams.get('plan')!)
  const billingQuery = ['monthly', 'annually'].includes(searchParams.get('billing')!)
  if (planQuery && billingQuery) {
    return true
  }

  return false
}

type FieldType = 'email' | 'password' | 'given_name' | 'family_name';

const SignUpPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: { message: '', hasError: false },
    password: { message: '', hasError: false },
    given_name: { message: '', hasError: false },
    family_name: { message: '', hasError: false },
  });

  // const isValidQuery = verifyQuery(searchParams)
  // if (!isValidQuery) {
  //   handleRedirect('https://www.newsgraf.com/pricing');
  //   return <Spinner />
  // }

  const getFieldError = (value: string, hasError: boolean, type: FieldType) => {
    if (hasError) {
      return value.trim() === '' ? 'Field is required' : `Invalid ${type}`;
    }
    return '';
  };

  const onSignUp = async () => {
    const emailError = !emailRegex.test(email);
    const passwordError = !passwordRegex.test(password);
    const givenNameError = givenName.trim() === '';
    const familyNameError = familyName.trim() === '';

    if (emailError || passwordError || givenNameError || familyNameError) {
      setFieldErrors({
        email: {
          message: getFieldError(email, emailError, 'email'),
          hasError: emailError,
        },
        password: {
          message: getFieldError(password, passwordError, 'password'),
          hasError: passwordError,
        },
        given_name: {
          message: getFieldError(givenName, givenNameError, 'given_name'),
          hasError: givenNameError,
        },
        family_name: {
          message: getFieldError(familyName, familyNameError, 'family_name'),
          hasError: familyNameError,
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await authHandlers.signUp({
        email,
        password,
        given_name: givenName,
        family_name: familyName,
      });

      if (response) {
        toast.success('Account created successfully!');
        navigate('/confirm-otp', { state: {
          email,
          plan: searchParams.get('plan'),
          billing: searchParams.get('billing'),
        }, replace: true },);
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

  const onChange = (type: FieldType, value: string) => {
    if (type === 'email') {
      setEmail(value);
      setFieldErrors((prev) => ({
        ...prev,
        email: { message: '', hasError: false },
      }));
    } else if (type === 'password') {
      setPassword(value);
      setFieldErrors((prev) => ({
        ...prev,
        password: { message: '', hasError: false },
      }));
    } else if (type === 'given_name') {
      setGivenName(value);
      setFieldErrors((prev) => ({
        ...prev,
        given_name: { message: '', hasError: false },
      }));
    } else if (type === 'family_name') {
      setFamilyName(value);
      setFieldErrors((prev) => ({
        ...prev,
        family_name: { message: '', hasError: false },
      }));
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col flex-1 justify-center items-center space-y-5">
        <header className="h-12 px-4 flex items-center">
          <img src={LogoSVG} alt="Company logo" className="h-8" />
        </header>

        <div className="w-full max-w-md bg-white p-6 border rounded-lg">
          <Heading size={'6'} weight={'medium'}>
            Sign Up
          </Heading>

          <div className="space-y-4 mt-5">
            {/* Given Name */}
            <div>
              <Text as="label" weight="medium" size={'2'}>
                First Name
              </Text>
              <Input
                id="given_name"
                type="text"
                placeholder="Enter your first name"
                value={givenName}
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => onChange('given_name', e.target.value)}
              />
              {fieldErrors.given_name.hasError && (
                <p className="text-sm text-theme-base">
                  {fieldErrors.given_name.message}
                </p>
              )}
            </div>

            {/* Family Name */}
            <div>
              <Text as="label" weight="medium" size={'2'}>
                Last Name
              </Text>
              <Input
                id="family_name"
                type="text"
                placeholder="Enter your last name"
                value={familyName}
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => onChange('family_name', e.target.value)}
              />
              {fieldErrors.family_name.hasError && (
                <p className="text-sm text-theme-base">
                  {fieldErrors.family_name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Text as="label" weight="medium" size={'2'}>
                Email address
              </Text>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => onChange('email', e.target.value)}
              />
              {fieldErrors.email.hasError && (
                <p className="text-sm text-theme-base">
                  {fieldErrors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Text as="label" weight="medium" size={'2'}>
                Password
              </Text>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e : React.ChangeEvent<HTMLInputElement>) => onChange('password', e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-theme-accent"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
                </button>
              </div>
              {fieldErrors.password.hasError && (
                <p className="text-sm text-theme-base">
                  {fieldErrors.password.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <button
                className="text-theme-main hover:underline text-sm"
                onClick={() => navigate('/login')}
              >
                <Text as="label" weight="medium" size={'2'}>
                  Login
                </Text>
              </button>
              <button
                className="flex items-center gap-2 bg-theme-main text-white px-4 py-2 rounded-lg hover:bg-theme-accent"
                onClick={onSignUp}
                disabled={isSubmitting}
              >
                <Text as="label" weight="medium" size={'2'}>
                  Sign Up
                </Text>
                {isSubmitting && <Spinner />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
