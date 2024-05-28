import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../features/Categories/categoriesSlice';
import Products from './Products';
import CategoriesRow from '../Categories/CategoriesRow';


export default function ProductsPage() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])
  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '24px', textTransform: 'uppercase' }}>Products</h1>
      <CategoriesRow categories={categories} />
      <Products products={list} />
    </>
  )
}
