import React from 'react';
import AppRoutes from './AppRoutes';
import { useToast } from '@/hooks/use-toast';
import MiniGameCoupon from '@/components/MiniGameCoupon';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FakePurchasePopup from '@/components/FakePurchasePopup';
import { Toaster } from 'react-hot-toast';
import DiscountPopup from '@/components/DiscountPopup';

const [adminUnlocked, setAdminUnlocked] = useState(false);

<DiscountPopup onUnlockAdmin={() => setAdminUnlocked(true)} />

{adminUnlocked && (
  <Link to="/admin/orders" className="text-blue-600 underline mt-2 block">Vào trang Admin</Link>
)}
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
