import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from '../redux/features/auth/authSlice';
import { useForm } from 'react-hook-form';


export const RegisterPage = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [password, setPassword] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const {status} = useSelector((state) => state.auth)                        //  мы достаем status  из state.auth

  const dispatch = useDispatch()



useEffect(() => {
if(status !== null){
  setIsVisible(current => !current)
}
}, status)


  const onSubmit = ()=> {
    try{
      dispatch(registerUser({name, email, phonenumber, password}));
      setName("")                                                            //  очищаем форму после отправки
      setEmail ("")
      setPhonenumber ("")
      setPassword ("")

    }
    catch(err){
      console.log(err)
      
    }
  }
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm({mode: "onBlur"});
   
 
  
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
            value = {name}
            onChange={(e)=> setName(e.target.value)}                        // берем value из input и записываем его в state (name)
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
            value={email}
            onChange={(e)=> setEmail(e.target.value)}  
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
            value={phonenumber}
            onChange={(e)=> setPhonenumber(e.target.value)}  
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
            value={password}
            onChange={(e)=> setPassword(e.target.value)}  
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
            <button
              className='btn'
              type='submit'
              onClick={onSubmit}>
              confirm
            </button>
            <div className={  isVisible === true ? "block"  :  "none"}> 
            <p>{status}</p>
            </div>
        </div>
      </form>
    </div>
  </div>
  )
}


