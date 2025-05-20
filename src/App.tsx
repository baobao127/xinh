import React from 'react';
import AppRoutes from './AppRoutes';
import { useToast } from '@/hooks/use-toast';
import MiniGameCoupon from '@/components/MiniGameCoupon';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FakePurchasePopup from '@/components/FakePurchasePopup';

<Layout>
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
