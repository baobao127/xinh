import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import PopupNotifier from '@/components/PopupNotifier';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      <PopupNotifier />
    </>
  );
};

export default Layout;
