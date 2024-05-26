import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes.js';

import { showUpForm } from '../../features/User/userSlice.js';

import styles from '../../styles/Header.module.css';
import logo from '../../images/store.svg';
import cartIcon from '../../images/cart.svg';


export default function Header() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.user);

  const [cartValue, setCartValue] = useState(0);

  const handleClick = () => {
    dispatch(showUpForm(true))
  }

  useEffect(() => {
    if (!cart.length) return
    setCartValue(cart.length)
  }, [cart])

  return (
    <section className={styles.header}>
      <div className={styles.body}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.account}>
          <Link>
            <button onClick={handleClick}>Login</button>
          </Link>
          <div className={styles.cart}>
            <Link to={ROUTES.CART}>
              <img src={cartIcon} alt="cart" />
            </Link>
            <span>{cartValue}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

