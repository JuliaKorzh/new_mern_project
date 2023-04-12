import React from 'react';
import { Link } from 'react-router-dom';

export const SuccsessRecoveryPage = () => {
  return (
    <div>
      <div className='success__container container'>
      <div className='success__flex'>
        <p>Password successfully recovered!</p>
        <Link to="/login" className='success__link'>You can log in</Link>
      </div>
    </div>
    </div>
  )
}

