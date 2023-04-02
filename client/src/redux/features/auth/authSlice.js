import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";


const initialState = {
   user:null,
   token: null,
   isLoading: false,
   status: null,

}
export const registerUser = createAsyncThunk( "auth/registerUser", 
   async ({name, email, phonenumber, password}) => {                          // параметры, кт мы хотим передать
      try{
         const {data} = await axios.post("/auth/register", {                 // ответ приходит как data, поэтому {}
            name,
            email,
            phonenumber,
            password,
         })
   
         if(data.token){                                                   //если в запросе есть токен, он сразу записывается в headers
            window.localStorage.setItem("token", data.token)
         }
         console.log(data)
         return data
      }
      catch(error) {
        console.log(error)
         } 
})


export const authSlice =  createSlice({
   name: "auth",
   initialState,
   reducers: {},
   extraReducers: {                                    //управление состояниями 
      [registerUser.pending]: (state) => {
         state.isLoading = true
         state.status = null
      },
      [registerUser.fulfilled]: (state, action) => {
         state.isLoading = false                       // payload это всё, что отправляетс на бэкенд {newUser: {...} message token}
         state.status = action.payload.message      
         state.user = action.payload.user
         state.token = action.payload.token
         
      },
      [registerUser.rejectWithValue]: (state, action) => {
         state.status = action.payload.message 
         state.isLoading = false
      },
   }                       
})

export default authSlice.reducer