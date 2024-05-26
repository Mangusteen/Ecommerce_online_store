import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Link } from 'react-router-dom';

import styles from '../../styles/Products.module.css';

export default function Products({ products = [], title }) {
  const list = products;

  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={styles.products}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {list.map(({ id, title, price, image }) =>
          <Link to={`/products/${id}`} className={styles.product} key={id}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={styles.info}>
              <div className={styles.title}>{title || <Skeleton />}</div>
              <div className={styles.price}>{price || <Skeleton />}$</div>
              <button>Add to cart</button>
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}

