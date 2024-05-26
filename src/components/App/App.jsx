import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserForm from '../../components/User/UserForm'

import { useDispatch } from 'react-redux';
import { getProducts } from '../../features/Products/ProductsSlice';

const Routes = lazy(() => import('../Routes/Routes'));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (

    <div className='app'>
      <Header />
      <UserForm />
      <Suspense fallback={<h1>Loading...</h1>}><Routes /></Suspense>
      <Footer />
    </div>
  )
}
