import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from '../redux/features/auth/authSlice';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



export const RegisterPage = () => {
  
  const dispatch = useDispatch()
  const { error, success } = useSelector(
    (state) => state.auth)  
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, watch } = useForm({mode: "onBlur"});

  useEffect(()=>{
      if(success) navigate ("/register/success")
      if(error) navigate("/error")
    }, [navigate, success, error])
                  
  const onSubmit = (data)=> {
      if(data.name && data.email && data.phonenumber && data.password){ 
        dispatch(registerUser(data))
      }
  }
  
  
  return (
    <div className='register__container container'>
    <div className='form__flex'>
      <h2 className='form__title'>Sign up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors?.name ? "invalid" : "valid"}
          {...register("name", {
              required: "field is required",
          })}
          type="text"
          placeholder="name">
        </input>
        <div className='errors'>
            {errors?.name && <p>{errors?.name?.message}</p>}
        </div>
        <input
           className={errors?.email ? "invalid" : "valid"}
            {...register("email", {
              required: "field is required",
              pattern: {
                value: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'invalid email format' 
              }
            })}
            type="email"
            placeholder="e-mail">
        </input>
        <div className='errors'>
            {errors?.email && <p>{errors?.email?.message}</p>}
        </div>
        <input
            className={errors?.phonenumber ? "invalid" : "valid"}
            {...register("phonenumber", {
              required: "field is required",
              pattern: {
                value: /^\+7(\s*)\d{3}(\s*)\d{3}(\s*)\d{2}(\s*)\d{2}/,
                message: 'invalid number format' 
              }
            })}
            type="tel"
            placeholder="+79...">
        </input>
        <div className='errors'>
            {errors?.phonenumber && <p>{errors?.phonenumber?.message }</p>}
        </div>
        <input
          className={errors?.password ? "invalid" : "valid"}
            {...register("password", {
            required: "field is required",
            minLength: {
              value: 8,
              message: 'Min 8 symbols'
            }
          })}
            type="password"
            placeholder="password">
        </input>
        <div className='errors'>
            {errors?.password && <p>{errors?.password?.message }</p>}
        </div>
        <input 
          className={errors?.confirm_password ? "invalid" : "valid"}
           {...register("confirm_password", {
            required: "field is required",
            validate: (val) => 
              val === watch("password") || "The passwords do not match",
          })}
            type="password"
            placeholder='confirm password'>
        </input>
        <div className='errors'>
            {errors?.confirm_password && <p>{errors?.confirm_password?.message}</p>}
        </div>
        <div className='btn__flex'>
            <button className='btn' type='submit' onClick={onSubmit}>
              confirm
            </button>
        </div>
      </form>
    </div>
  </div>
  )
}