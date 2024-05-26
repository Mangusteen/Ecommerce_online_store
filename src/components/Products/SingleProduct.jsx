import React, { useEffect } from 'react';
import Product from './Product';
import { getProduct } from '../../features/Products/ProductsSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbes from '../UI/Navigation/BreadCrumbes';
import Products from './Products';

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { id } = useParams();

  useEffect(() => {
    if (!id || !product) return;
    dispatch(getProduct(id));
  }, [dispatch, id])


  return (
    <>
      <>
        <BreadCrumbes />
        <Product product={product} />
      </>
    </>
  )
}
