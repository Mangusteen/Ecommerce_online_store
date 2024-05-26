import React, { useEffect } from 'react';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory, getSpecificProducts } from '../../features/Products/ProductsSlice';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import BreadCrumbes from '../UI/Navigation/BreadCrumbes';

export default function CategoryWithProducts() {
  const { category } = useParams();
  const { specificProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificProducts(category))
    dispatch(getProductsByCategory(category))
  }, [dispatch, category])

  return (
    <>
      <BreadCrumbes />
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '30px' }}>{category}</h1>
      <Products products={specificProducts} />
    </>
  )
}
