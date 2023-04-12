import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

export const store = configureStore ({               //store  - это хранилище данных. Слайс это часть хранилища. Redux toolkit Он 
   reducer: {                                                   //разделяет части хранилища на разные файлы, слайсы.
      auth: authSlice,                                 
   }
})



//Слайс представляет собой единую единицу состояния Redux. Это набор логики редьюсера и действий для одной функции в вашем приложении.