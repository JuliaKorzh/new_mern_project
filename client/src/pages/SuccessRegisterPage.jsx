import React from 'react'
import { Link } from 'react-router-dom'

export const SuccessRegisterPage = () => {
  
 
  return (
    <div className='message__container container'>
      <div className='message__flex'>
        <p>Registration completed successfully!</p>
        <Link to="/login" className='message__link'>You can log in</Link>
      </div>
    </div>
  )
}


