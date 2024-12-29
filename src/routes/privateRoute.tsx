import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/authContext';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the layout with the child routes
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;
