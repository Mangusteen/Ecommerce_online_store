import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { addItemToCart, deleteItemFromCart } from '../../features/User/userSlice';
import { getTotalPrice } from '../../utils/common';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Cart.module.css';
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';
import close from '../../images/close.svg';


export default function Cart() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.user);

  const deleteItem = (id) => {
    dispatch(deleteItemFromCart(id))
  }

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }))
  }

  // useEffect(() => {
  //   if (!cart) return;
  // }, [cart])

  return (
    <section className={styles.cart}>
      <>
        {!cart.length ? <h3>Cart is empty</h3> : (
          <div className={styles.list}>
            {cart.map((item) => {
              const { id, category, image, price, quantity, title } = item;
              return (
                <div className={styles.item} key={id}>
                  <div className={styles.content}>
                    <div className={styles.image}>
                      <img src={image} alt="image" />
                    </div>
                    <div className={styles.info}>
                      <div className={styles.title}>{title || <Skeleton />}</div>
                      <div className={styles.category}>{category || <Skeleton />}</div>
                    </div>
                  </div>

                  <div className={styles.quantity}>
                    <div className={styles.minus} onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}><img src={minus} alt="minus" /></div>
                    <span>{quantity || <Skeleton />}</span>
                    <div className={styles.plus} onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}><img src={plus} alt="plus" /></div>
                  </div>
                  <div className={styles.price}>{price || <Skeleton />}$</div>
                  <div className={styles.totalPrice}>{Math.floor(price * quantity)}$</div>
                  <div className={styles.delete} onClick={() => deleteItem(id)}>
                    <img src={close} alt="delete-icon" />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </>


      <div className={styles.amount}>
        {/* функция посчитает сколько товаров мы положили на кукую сумму и общее колво */}
        <div className={styles.total}>
          <h1 className={styles.titleTotal}>TOTAL PRICE: </h1>
          <div className={styles.totalAmount}>{Math.floor(getTotalPrice(cart.map(({ quantity, price }) => quantity * price)))}$</div>
        </div>

        <div className={styles.buttons}>
          <Link to={ROUTES.PRODUCTS} className={styles.link}>Back to purchases</Link>
          <button>Proceed to checkout</button>
        </div>

      </div>

    </section>
  )
}
