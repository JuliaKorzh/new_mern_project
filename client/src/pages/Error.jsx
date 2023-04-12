import React from "react";
import { useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const Error = ()=>{
   const { error } = useSelector(
      (state) => state.auth)  

      const [isVisible, setIsVisible] = useState(false)

useEffect(()=>{
   if(error === "User with this email address already exists"){
      setIsVisible (current => !current)
   }
}, [error])
  


   return(
      <div className="message__container container">
         <div className="message__flex">
            <p>{error}</p>
            <Link to="/recovery" className={ isVisible === true ? "message__link"  :  "none"}>You can reset your password here</Link>
         </div>
      </div>
   )
}




