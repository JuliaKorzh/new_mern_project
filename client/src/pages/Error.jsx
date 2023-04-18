import React from "react";
import { useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {logout} from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';

export const Error = ()=>{
   const dispatch = useDispatch()
   const resetHandler = ()=>{
      dispatch(logout())
      window.localStorage.removeItem("token")
    }

   const { error } = useSelector(
      (state) => state.auth)  

      const [isVisibleReg, setIsVisibleReg] = useState(false)
      const [isVisibleLog, setIsVisibleLog] = useState(false)

useEffect(()=>{
   if(error === "User with this email address already exists"){
      setIsVisibleReg (current => !current)
   }
   if(error === "Wrong login or password"){
      setIsVisibleLog (current => !current)
   }
}, [error])
  


   return(
      <div className="message__container container">
         <div className="message__flex">
            <p>{error}</p>
            <Link to="/recovery" onClick={resetHandler} className={ isVisibleReg === true ? "message__link"  :  "none"}>You can reset your password here</Link>
            <Link to="/login" onClick={resetHandler} className={ isVisibleLog === true ? "message__link" : "none"}>Try it again</Link>
         </div>
      </div>
   )
}




