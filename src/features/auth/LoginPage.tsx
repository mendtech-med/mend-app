import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useAuth } from '../../context/authContext';
import { authHandlers } from '../../services/handlers/auth';
import { emailRegex, passwordRegex } from '../../libs/constants';
import toast from 'react-hot-toast';
import { LogoSVG } from '../../assets/images/svgs';
import { Heading, Spinner, Text } from '@radix-ui/themes';
import Input from '../../components/ui/input';

type FieldType = 'email' | 'password';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    email: { message: '', hasError: false },
    password: { message: '', hasError: false },
  });

  const getFieldError = (value: string, hasError: boolean, type: FieldType) => {
    if (hasError) {
      return value.trim() === '' ? 'Field is required' : `Invalid ${type}`;
    }
    return '';
  };

  const onLogin = async () => {
    const emailError = !emailRegex.test(email);
    const passwordError = !passwordRegex.test(password);

    if (emailError || passwordError) {
      setFieldErrors({
        email: {
          message: getFieldError(email, emailError, 'email'),
          hasError: emailError,
        },
        password: {
          message: getFieldError(password, passwordError, 'password'),
          hasError: passwordError,
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await authHandlers.login({ email, password });
      const data = response;

      if (data.success) {
        handleSuccessfulLogin(data);
      }
    } catch (err) {
      const error = err as { response: { data: { message: string, plan: 'NOT_FOUND' } } };

      if (error.response.data.plan === 'NOT_FOUND') {
        if (redirectUri) {
          // Handle plan not found for extension users
          const redirectUrl = new URL(redirectUri);
          redirectUrl.searchParams.set('error', 'plan_not_found');
          window.location.href = redirectUrl.toString();
        } else {
          navigate('/select-plan', {
            state: { email },
            replace: true
          });
        }
        return;
      }
      
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
    } else {
      setPassword(value);
      setFieldErrors((prev) => ({
        ...prev,
        password: { message: '', hasError: false },
      }));
    }
  };


  // For Extension
  // Add new state for redirect URI
  const [redirectUri, setRedirectUri] = useState<string | null>(null);

  useEffect(() => {
    // Check for redirect_uri in URL parameters when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect_uri');
    if (redirect) {
      setRedirectUri(redirect);
    }
  }, []);

  const handleSuccessfulLogin = (data: any) => {
    if (redirectUri) {
      // If there's a redirect URI (coming from Chrome extension)
      const redirectUrl = new URL(redirectUri);
      redirectUrl.searchParams.set('token', data.access_token);
      
      // Redirect back to the Chrome extension
      window.location.href = redirectUrl.toString();
    } else {
      // Normal web app flow
      login({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expiry: data.expiry,
        email: data.user.email,
        given_name: data.user.given_name,
        family_name: data.user.family_name,
      });

      toast.success(data.message);
      navigate('/');
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
            Login
          </Heading>

          <div className="space-y-4 mt-5">
            {/* Email Field */}
            <div>
              <Text as="label" weight="medium" size={'2'}>
                Email address
              </Text>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => onChange('email', e.target.value)}
              />
              {fieldErrors.email.hasError && (
                <p className="text-sm text-theme-base">
                  {fieldErrors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
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
                className="text-theme-main text-sm"
                onClick={() => navigate('/sign-up')}
              >
                <Text as="label" weight="medium" size={'2'}>
                  Sign up
                </Text>
              </button>
              <button
                type='submit'
                className="flex items-center gap-2 bg-theme-main text-white px-4 py-2 rounded-lg hover:bg-theme-accent"
                onClick={onLogin}
                disabled={isSubmitting}
              >
                <Text as="label" weight="medium" size={'2'}>
                  Login
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

export default LoginPage;
