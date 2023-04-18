import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PersonalAccountPage = () => {

  const {userInfo} = useSelector((state)=> state.auth)
  

  return (
    <div className='message__container container'>
      <div className="message__flex">
        <h3>Wellcome {userInfo.user.name}!</h3>
        <p>Your phonenumber: {userInfo.user.phonenumber} </p>
        <p>Your email: {userInfo.user.email}</p>
        <Link to = "" className="message__link" >Change my data</Link>
      </div>
    </div>
  )
}


