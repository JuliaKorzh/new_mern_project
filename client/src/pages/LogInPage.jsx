import React from 'react'
import { Link } from 'react-router-dom'

export const LogInPage = () => {
  return (
      <div className='login__container container'>
        <div className='form__flex'>
          <h2 className='form__title'>Welcome</h2>
          <form onSubmit={(e => e.preventDefault())}>
              <input
                type="email"
                placeholder="E-mail">
                </input>
              <input
                type="password"
                placeholder="Password">
              </input>
              <div className='btn__flex'>
                <button
                  className='btn'
                  type='submit'>
                  log in</button>
                <Link to="/recovery"
                  className='btn'>
                  forgot password</Link>
              </div>
             </form>
        </div>
      </div>
   
  )
}


