import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllStays } from "../redux/features/stay/staySlice";
import { Card } from "./Card";



export const CardsAll = ({selectedCategory, selectedPrice, selectedArea})=>{
   
   const dispatch = useDispatch()
   const {stays} = useSelector((state)=> state.stay )
   useEffect(()=>{
         dispatch(getAllStays())
   }, [dispatch])


   const filteredByCategory = filterCategory(stays, selectedCategory)
   function filterCategory(stays, selectedCategory) {
      const result = stays.filter(( el => el.category === selectedCategory || selectedCategory === "all"))
         return result
         }

   const filteredByPrice = filterPrice (filteredByCategory, selectedPrice)      
   function filterPrice (filteredByCategory, selectedPrice) {
      const result = filteredByCategory.filter((el => el.price <= selectedPrice || selectedPrice === 0))
      return result
   }

   const filteredByArea = filterArea(filteredByPrice, selectedArea)
   function filterArea (filteredByPrice, selectedArea) {
      const result = filteredByPrice.filter((el => el.area <= selectedArea || selectedArea === 0))
      return result
   }
  
   return (
      <div className="cards__flex">
         {filteredByArea.map((stay, idx) => (
            <Card key={idx} stay={stay}/>
            ))}
      </div>
   )}
