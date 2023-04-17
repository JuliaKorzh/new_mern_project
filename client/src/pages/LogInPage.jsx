import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { loginUser } from '../redux/features/auth/authSlice';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export const LogInPage = () => {

const { userInfo, error} = useSelector ((state) =>state.auth)
const dispatch = useDispatch()
const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});
const navigate = useNavigate()


const onSubmit = (data) =>{
  if(data.email && data.password){
    dispatch(loginUser(data))
  }}

useEffect(()=>{
  if(userInfo){navigate("/me")}
  if(error) {navigate("/error")}
}, [userInfo, navigate, error])


  return (
      <div className='login__container container'>
        <div className='form__flex'>
          <h2 className='form__title'>Welcome</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input className={errors?.email ? "invalid" : "valid"}
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "field is required",
                  pattern: {
                    value: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    message: 'invalid email format' 
                  }
                })}>
              </input>
              <div className='errors'>
                {errors?.email && <p>{errors?.email?.message}</p>}
              </div>
              <input className={errors?.password ? "invalid" : "valid"}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "field is required",
                  minLength: {
                    value: 8,
                    message: 'Min 8 symbols'
                  }
                })}>
              </input>
              <div className='errors'>
                {errors?.password && <p>{errors?.password?.message }</p>}
              </div>
              <div className='btn__flex'>
                <button className='btn' type='submit' onClick={onSubmit}>
                  log in</button>
                <Link to="/recovery" className='btn'>
                  forgot password</Link>
              </div>
             </form>
        </div>
      </div>
   
  )
}


