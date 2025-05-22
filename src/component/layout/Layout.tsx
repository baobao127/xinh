import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import Toast from '@/component/Popup/Toast';
import DiscountPopup from '@/component/Popup/DiscountPopup';
import FakePurchasePopup from '@/component/Popup/FakePurchasePopup';
import PopupNotifier from '@/component/Popup/PopupNotifier';
import ScrollToTopButton from '@/component/common/ScrollToTopButton';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 pb-20 px-4">
        <Outlet />
      </main>
      <Footer />

      {/* Popup hiệu ứng */}
      <Toast />
      <DiscountPopup />
      <FakePurchasePopup />
      <PopupNotifier />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
