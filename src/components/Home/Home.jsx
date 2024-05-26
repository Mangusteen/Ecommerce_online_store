import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Banner from '../Banner/Banner';
import ProductsRow from '../Products/ProductsRow';

import { getWithLimit } from '../../features/Products/ProductsSlice';


export default function Home() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getWithLimit());
  }, [dispatch])

  return (
    <>
      <Banner />
      <ProductsRow />
    </>
  )

}
