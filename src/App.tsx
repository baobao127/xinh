import React from 'react';
import AppRoutes from './AppRoutes';
import { useToast } from '@/hooks/use-toast';

function App() {
  const { Toast } = useToast();

  return (
    <>
      <AppRoutes />
      <Toast />
    </>
  );
}

export default App;
