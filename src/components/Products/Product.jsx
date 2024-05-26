import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../features/User/userSlice';
import styles from '../../styles/Product.module.css';

export default function Product({ product = [] }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.user);
  const { title, price, image, category, description } = product;


  const addToCart = () => {
    dispatch(addItemToCart(product));
  }

  useEffect(() => {
    if (!cart) return;
  }, [cart])

  return (
    <section className={styles.product}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.category}>{category}</p>
        </div>

        <div className={styles.text}>{description}</div>
        <div className={styles.price}>{price}$</div>
        <button className={styles.add} onClick={addToCart}>Add to cart</button>
      </div>

    </section>
  )
}
