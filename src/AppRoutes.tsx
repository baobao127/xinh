import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import AdminLayout from '@/components/layout/AdminLayout';

import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Success from '@/pages/Success';
import NotFound from '@/pages/NotFound';

import Products from '@/pages/Products';
import ProductsView from '@/pages/ProductsView';
import ProductDetail from '@/pages/ProductDetail';

import AdminProducts from '@/pages/admin/Products';
import ProductsEditor from '@/pages/admin/ProductsEditor';
import AdminOrders from '@/pages/admin/AdminOrders';
import Settings from '@/pages/admin/Settings';
import AdminSettings from '@/pages/admin/AdminSettings';
import UnlockAdmin from '@/components/UnlockAdmin';
import DiscountUnlock from '@/pages/DiscountUnlock';
import ProductCard from '@/component/product/ProductCard';
import { Toast, DiscountPopup } from '@/component/popup/ToastManager';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="all-products" element={<ProductsView />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/unlock" element={<UnlockAdmin />} />
      <Route path="/unlock" element={<DiscountUnlock />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="products" element={<AdminProducts />} />
        <Route path="product-editor" element={<ProductsEditor />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
