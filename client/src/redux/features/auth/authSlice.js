import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";


const initialState = {
   user:null,
   token: null,
   isLoading: false,
   message: null,
   status: null

}
export const registerUser = createAsyncThunk( "auth/registerUser", 
   async ({name, email, phonenumber, password}, { rejectWithValue }) => {                          // параметры, кт мы хотим передать
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
         if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
          } else {
            return rejectWithValue(error.message)
          }
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
      [registerUser.fulfilled]: (state, {payload}) => {
         state.isLoading = false                       
         state.message = payload.message 
         state.status= payload.status    
         state.user = payload.user
         state.token = payload.token
         
      },
      [registerUser.rejectWithValue]: (state, {payload}) => {
         state.message = payload.message
         state.isLoading = false
         state.status= payload.status   
      },
   }                       
})

export default authSlice.reducer