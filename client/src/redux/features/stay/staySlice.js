import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";


export const getAllStays = createAsyncThunk("stay/getAllStays", async() =>{
   try{
      const {data} = await axios.get("/stay/all")
      return data
   }
   catch(error) {
      console.log(error);
      }
} )


const initialState = {
   loading: false,
   stays: [],
}

export const staySlice = createSlice({
   name: "stay",
   initialState,
   reducers: {},
   extraReducers: {
      // getAll
      [getAllStays.pending]: (state) => {
         state.loading= true
      },
      [getAllStays.fulfilled]: (state, {payload}) => {
         state.loading= false
         state.stays= payload
      },
      [getAllStays.rejected]: (state) => {
         state.loading= false
      }
   }
})

export default staySlice.reducer