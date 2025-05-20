import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import PopupNotifier from '@/components/PopupNotifier';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useEffect, useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currScroll = window.scrollY;
      setShow(currScroll < lastScroll || currScroll < 10);
      lastScroll = currScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="p-4 shadow">XinhStyle</div>
    </header>
  );
};

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      <PopupNotifier />
      <ScrollToTopButton />
      <FakePurchasePopup />
    </>
  );
};

export default Layout;
