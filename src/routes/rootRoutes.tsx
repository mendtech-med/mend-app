import { createBrowserRouter } from 'react-router-dom';
import {
  CreatePage,
  DiscussPage,
  ReaderSetupPage,
  BrandSetupPage,
  TrustBucketPage,
  SubscriptionPage,
  HelpPage,
  CategorySetupPage,
  LoginPage,
  SignupPage,
  ConfirmationPage,
  NewsPage,
  PaymentPage,
  PlanSelectionPage,
} from '../features';
import { categoryLoader } from '../features/category-setup/loaders/categoryLoader';
import { readerLoader } from '../features/reader-setup/loaders/readerLoader';
import PrivateRoute from './privateRoute';
import { newsLoader } from '../features/create/loaders/newsLoader';
import { subscriptionLoader } from '../features/subscription/loaders/subscriptionLoader';

export const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/confirm-otp',
      element: <ConfirmationPage />,
    },
    {
      path: '/payment',
      element: <PaymentPage />,
    },
    {
      path: '/select-plan',
      element: <PlanSelectionPage />,
    },
    {
      path: '/sign-up',
      element: <SignupPage />,
    },
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        {
          index: true,
          element: <CreatePage />,
          loader: newsLoader,
        },
        {
          path: 'discuss',
          element: <DiscussPage />,
        },
        {
          path: 'news/:newsId',
          element: <NewsPage />,
        },
        {
          path: 'reader-setup',
          element: <ReaderSetupPage />,
          loader: readerLoader,
        },
        {
          path: 'category-setup',
          element: <CategorySetupPage />,
          loader: categoryLoader,
        },
        {
          path: 'brand-setup',
          element: <BrandSetupPage />,
        },
        {
          path: 'trust-bucket',
          element: <TrustBucketPage />,
          loader: newsLoader,
        },
        {
          path: 'subscription',
          element: <SubscriptionPage />,
          loader: subscriptionLoader
        },
        {
          path: 'help',
          element: <HelpPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
