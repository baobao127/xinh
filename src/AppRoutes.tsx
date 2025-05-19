import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import NotFound from '@/pages/NotFound';
import Checkout from '@/pages/Checkout';
import Success from '@/pages/Success';
import Cart from '@/pages/Cart';
import Home from '@/pages/Home';

// Admin
import AdminProducts from '@/pages/admin/Products';
import ProductsEditor from '@/pages/admin/ProductsEditor';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/product-editor" element={<ProductsEditor />} />
    </Routes>
  );
};

export default AppRoutes;
