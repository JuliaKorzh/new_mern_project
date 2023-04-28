import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/message.module.scss'


export const SuccessRegisterPage = () => {
  
 
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <p>Registration completed successfully!</p>
        <Link to="/login" className={styles.link}>You can log in</Link>
      </div>
    </div>
  )
}


