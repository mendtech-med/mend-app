import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useNavigation } from 'react-router-dom';
import { Spinner } from '@radix-ui/themes';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const navigation = useNavigation();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="relativeflex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
        {navigation.state === 'loading' &&
          <Spinner size='3' />
        }
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
