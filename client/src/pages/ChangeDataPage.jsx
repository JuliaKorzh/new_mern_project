import React from "react";
import { useEffect } from "react";
import { changeData } from "../redux/features/auth/authSlice";
import { useForm } from 'react-hook-form';
import styles from "../styles/form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export const ChangeDataPage = ()=>{

   const { register, handleSubmit, formState: { errors }, watch } = useForm({mode: "onBlur"});
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {success, error} = useSelector((state)=> state.auth)

   const onSubmit = (data)=>{
      if(data.name && data.email && data.phonenumber && data.password){
         dispatch(changeData(data))
         
      }
   }
   useEffect(()=>{
      if(success){navigate("/me")}
      if(error){navigate("/error")}
       }, [error, success, navigate])

   return(
      <div className={styles.container}>
      <div className={styles.flex}>
        <h2 className={styles.title}>Enter new data</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors?.name ? styles.invalid : styles.valid}
          {...register("name", {
              required: "field is required",
          })}
          type="text"
          placeholder="name">
        </input>
        <div className={styles.errors}>
            {errors?.name && <p>{errors?.name?.message}</p>}
        </div>
            <input className={errors?.email ? styles.invalid : styles.valid}
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
            <div className={styles.errors}>
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>
            <input
            className={errors?.phonenumber ? styles.invalid : styles.valid}
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
        <div className={styles.errors}>
            {errors?.phonenumber && <p>{errors?.phonenumber?.message }</p>}
        </div>
        <input
          className={errors?.password ? styles.invalid : styles.valid}
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
        <div className={styles.errors}>
            {errors?.password && <p>{errors?.password?.message }</p>}
        </div>
        <input 
          className={errors?.confirm_password ? styles.invalid : styles.valid}
           {...register("confirm_password", {
            required: "field is required",
            validate: (val) => 
              val === watch("password") || "The passwords do not match",
          })}
            type="password"
            placeholder='confirm password'>
        </input>
        <div className={styles.errors}>
            {errors?.confirm_password && <p>{errors?.confirm_password?.message}</p>}
        </div>
            <div className={styles.btnFlex}>
              <button className={styles.btn} type='submit' onClick={onSubmit}>
                submit</button>
            </div>
           </form>
      </div>
    </div>


   )
}