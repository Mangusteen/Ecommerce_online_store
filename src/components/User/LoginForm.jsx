import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAuth } from '../../features/User/userSlice';

import styles from '../../styles/LoginForm.module.css';
import close from '../../images/close.svg';

export default function LoginForm({ closeForm }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAuth(values));
    closeForm();
  }
  return (
    <section className={styles.login}>
      <div className={styles.close} onClick={closeForm}>
        <img src={close} alt="close-icon" />
      </div>
      <h1 className={styles.title}>Log in</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            type="text"
            name="username"
            placeholder="your login"
            autoComplete="off"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            name="password"
            placeholder="your password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </section>
  )
}
