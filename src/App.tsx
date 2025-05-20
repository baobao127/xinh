import React from 'react';
import AppRoutes from './AppRoutes';
import { useToast } from '@/hooks/use-toast';
import MiniGameCoupon from '@/components/MiniGameCoupon';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FakePurchasePopup from '@/components/FakePurchasePopup';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" />
    </>
  );
}
<Layout>
  <OfflineWarning />
  <MiniGameCoupon />
  <ScrollToTopButton />
  <FakePurchasePopup />
  {/* ... */}
</Layout>

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
