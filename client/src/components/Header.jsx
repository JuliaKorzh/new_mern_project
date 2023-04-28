import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../static/logo.svg";
import { useSelector } from 'react-redux';
import {logout, checkIsAuth} from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import styles from "../styles/header.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



export const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(checkIsAuth)

  const logoutHandler = ()=>{
    dispatch(logout())
    window.localStorage.removeItem("token")
  }

//___burger menu

const [burger, setBurger] = useState(false)

  return (
    <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerFlex}>
        <div className={styles.logo}>
        <NavLink to={"/"}>
        <img width={128} height={48} src={logo} alt="logo"/></NavLink>
        </div>
        <nav className={styles.menu}>
           {!isAuth && (
             <ul onClick={()=> setBurger(!burger)}
             className={ burger ? styles.active : undefined}>
               <li ><NavLink to={"/"} className={ ({isActive}) => isActive ? styles.active : undefined }>STAYS</NavLink></li>
                <li><NavLink end to={"/register"}
                 className={ ({isActive}) => isActive ? styles.active : undefined }>SIGN UP</NavLink></li>
               <li><NavLink to={"/login"}
                 className={ ({isActive}) => isActive ? styles.active : undefined }>LOG IN</NavLink></li>
             </ul>
           )}
          
              {isAuth && (
                <ul onClick={()=> setBurger(!burger)}
                className={ burger ? styles.active : undefined}
                >
                  <li ><NavLink to={"/"}
                  className={ ({isActive}) => isActive ? styles.active : undefined }>STAYS</NavLink></li>
                  <li><NavLink to={"/me"}
                  className={ ({isActive}) => isActive ? styles.active : undefined }>MY ACCOUNT</NavLink></li>
                  <li><Link to={"/"} onClick={logoutHandler}
                  className={ ({isActive}) => isActive ? styles.active : undefined }>LOG OUT</Link></li>
                </ul>
    
              )}

        <div onClick={()=> setBurger(!burger)} className={styles.burgerBtn}>
          {burger ? <AiOutlineClose size={25} /> :  <AiOutlineMenu size={25} />}
        </div>
        </nav>
      </div>
    </div>
  </header>
  )
}


