import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../static/logo.svg";
import { useSelector } from 'react-redux';
import {logout, checkIsAuth} from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';


export const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(checkIsAuth)

  const logoutHandler = ()=>{
    dispatch(logout())
    window.localStorage.removeItem("token")
  }
  return (
    <header className="header">
    <div className="header__container container">
      <div className="header__flex">
        <div className="header__logo">
        <img width={128} height={48} src={logo} alt="logo"/>
        </div>
        <nav className="header__menu">
           {!isAuth && (
             <ul>
               <li><NavLink to={"/"}
               className={ ({isActive}) => isActive ? "link-active" : undefined }>STAYS</NavLink></li>
                <li><NavLink end to={"/register"}
                 className={ ({isActive}) => isActive ? "link-active" : undefined }>SIGN UP</NavLink></li>
               <li><NavLink to={"/login"}
                 className={ ({isActive}) => isActive ? "link-active" : undefined }>LOG IN</NavLink></li>
             </ul>
           )}
          
              {isAuth && (
                <ul>
                  <li><NavLink to={"/"}
                  className={ ({isActive}) => isActive ? "link-active" : undefined }>STAYS</NavLink></li>
                  <li><NavLink to={"/me"}
                  className={ ({isActive}) => isActive ? "link-active" : undefined }>MY ACCOUNT</NavLink></li>
                  <li><Link to={"/"} onClick={logoutHandler}
                  className={ ({isActive}) => isActive ? "link-active" : undefined }>LOG OUT</Link></li>
                </ul>
              )}

        </nav>
      </div>
    </div>
  </header>
  )
}


