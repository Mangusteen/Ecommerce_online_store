import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Categories.module.css';

export default function CategoriesRow({ categories = [] }) {
  const categoriesOfProducts = categories;

  return (
    <>
      <section className={styles.categories}>
        {categoriesOfProducts.map((category, i) => {
          return <Link to={`category/${category}`} key={i} className={styles.category}>
            <div>{category}</div>
          </Link>
        })}
      </section>
    </>
  )
}

