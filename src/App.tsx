import { RouterProvider } from 'react-router-dom';
import { router } from './routes/rootRoutes';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { AuthProvider } from './context/authContext';
import { Toaster } from 'react-hot-toast';
const App = () => (
  <Theme grayColor="gray" panelBackground="solid" scaling="100%" radius="large">
    <Toaster />
    <AuthProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </AuthProvider>
  </Theme>
);

export default App;
