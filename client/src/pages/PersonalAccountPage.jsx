import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/message.module.scss'

export const PersonalAccountPage = () => {

  const {userInfo} = useSelector((state)=> state.auth)
  

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <h3>Wellcome {userInfo.user.name}!</h3>
        <p>Your phonenumber: {userInfo.user.phonenumber} </p>
        <p>Your email: {userInfo.user.email}</p>
        <Link to = "/changedata" className={styles.link} >Change my data</Link>
      </div>
    </div>
  )
}


