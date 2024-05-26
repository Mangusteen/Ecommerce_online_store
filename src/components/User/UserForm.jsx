import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUpForm } from '../../features/User/userSlice';

import LoginForm from './LoginForm';
import styles from '../../styles/LoginForm.module.css';


export default function UserForm() {

  const dispatch = useDispatch();
  const { showForm } = useSelector((state) => state.user);

  const closeForm = () => {
    dispatch(showUpForm(false))
  }


  return (
    <>
      {showForm && (
        <>
          <div className={styles.overlay} onClick={closeForm}></div>
          <LoginForm closeForm={closeForm} />
        </>
      )}
    </>
  )
}
