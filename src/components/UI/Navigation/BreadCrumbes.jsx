import React from 'react'
import { ROUTES } from '../../../utils/routes'
import { Link, useParams } from 'react-router-dom'

import styles from '../../../styles/Nav.module.css';
export default function BreadCrumbes() {

  const { category } = useParams();
  return (
    <div className={styles.breadcrumbes}>
      <Link to={ROUTES.HOME} className={styles.link}>Home /</Link>
      <Link to={ROUTES.PRODUCTS} className={styles.link}>Products /</Link>
      <Link className={styles.link}>{category}</Link>
    </div>
  )
}
