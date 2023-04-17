import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const registerUser = createAsyncThunk( "auth/registerUser", 
   async ({name, email, phonenumber, password}, { rejectWithValue }) => {                          // параметры, кт мы хотим передать
      try{
         const {data} = await axios.post("/auth/register", {name, email, phonenumber, password})
   
         if(data.token){                                                   //если в запросе есть токен, он сразу записывается в headers
            window.localStorage.setItem("token", data.token)
         }
         return data
      }
      catch(error) {
         console.log( error);
         console.log(error.response.request.status);
         console.log('message:', error.response.data.message);
         return rejectWithValue(error.response.data.message);
         } 
})

export const loginUser = createAsyncThunk( "auth/loginUser", 
   async ({email, password}, { rejectWithValue }) => {                          // параметры, кт мы хотим передать
      try{
         const {data} = await axios.post("/auth/login", { email, password})
   
         if(data.token){                                                   //если в запросе есть токен, он сразу записывается в headers
            window.localStorage.setItem("token", data.token)
         }
         return data
      }
      catch(error) {
         console.log('error', error.response.request.status);
         console.log('message', error.response.data.message);
         return rejectWithValue(error.response.data.message);
         }
})


const initialState = {
   loading: false,
   userInfo: null,                                  
   userToken: null, 
   error: null,
   success: false, 
   };

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.userInfo = null;
         },
   },
   extraReducers: {
      //Register
       [registerUser.pending]: (state) => {
         state.loading = true
         state.error = null
      },
      [registerUser.fulfilled]: (state) => {
         state.loading = false
         state.success = true 
      },
      [registerUser.rejected]: (state, { payload }) => {
         state.loading = false
         state.error = payload
      },
      //Login
      [loginUser.pending]: (state) => {
         state.loading = true
         state.error = null
      },
      [loginUser.fulfilled]: (state, { payload }) => {
         state.loading = false
         state.userInfo = payload
         state.userToken = payload.userToken
         
      },
      [loginUser.rejected]: (state, { payload }) => {
         state.loading = false
         state.error = payload
      },

   },
}
);

export default authSlice.reducer