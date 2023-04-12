import React from "react";
import { registerUser } from '../redux/features/auth/authSlice';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export const WrongPassword = ()=> {

const error = useSelector((state)=> state.auth)

return(
   <div>
      <div>
         <p>{error}</p>
         <Link to="/recover" className='success__link'>recover Password</Link>
      </div>
   </div>
)
}