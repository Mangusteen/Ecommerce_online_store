import React from 'react';
import styles from '../../styles/Banner.module.css';

import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.body}>
        <h1 className={styles.title}>New Winter Collection is here</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto, beatae et deserunt excepturi eius optio expedita dolorum quos hic earum sequi velit dicta eos eaque fugiat sint vero quisquam?</p>
        <Link to={ROUTES.PRODUCTS}>
          <button className={styles.btn}>Shop now</button></Link>
      </div>

    </section>
  )
}
