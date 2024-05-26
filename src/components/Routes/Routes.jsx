import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../utils/routes.js';

// const Home = lazy(() => import('../Home/Home'));
// const Cart = lazy(() => import('../Cart/Cart.jsx'));
// const SingleProduct = lazy(() => import('../Products/SingleProduct'));
// const ProductsPage = lazy(() => import('../Products/ProductsPage.jsx'));
// const CategoryWithProducts = lazy(() => import('../Products/CategoryWithProducts.jsx'));
// const UserForm = lazy(() => import('../User/UserForm.jsx'));
import Home from '../Home/Home';
import Cart from '../Cart/Cart.jsx';
import SingleProduct from '../Products/SingleProduct';
import Products from '../Products/Products.jsx';
import ProductsPage from '../Products/ProductsPage.jsx';
import CategoryWithProducts from '../Products/CategoryWithProducts.jsx';
import UserForm from '../User/UserForm.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={ROUTES.CATEGORY} element={<CategoryWithProducts />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.USER} element={<UserForm />} />
    </Routes>
  )
}
