import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { getWithLimit } from '../../features/Products/ProductsSlice';

import Products from './Products';
import styles from '../../styles/Cart.module.css';


export default function ProductsRow() {
  const dispatch = useDispatch();

  const { withLimits, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (!withLimits.length || isLoading) return;
    dispatch(getWithLimit());
  }, [dispatch])


  return (
    <>
      {isLoading ? ("Loading...") : (<Products products={withLimits} title='Latest Products' />)}
      {/* переделать кнопку линк в отдельный компонент */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={ROUTES.PRODUCTS} className={styles.link}>Show all</Link>
      </div>
    </>
  )
}


