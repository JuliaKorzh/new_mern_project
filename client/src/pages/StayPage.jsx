import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../utils/axios";




export const StayPage = () => {

  const [stay, setStay]= useState({})
  const params = useParams()

  const fetchStay = useCallback(async () => {
    const { data } = await axios.get(`/stay/${params.id}`)
    setStay(data)
}, [params.id])

useEffect(() => {
    fetchStay()
}, [fetchStay])




  return (
    <div className='stay__container container'>
      <div className="card">
          <div className="card__img"><img src={stay.imageUrl} alt="img"/></div>
          <div className="card__descripcion">
              <div className="card__flex">
                 <h4>{stay.title}</h4>
                  <div className="card__details">
                     <p>{stay.price}</p>
                     <p>{stay.area}</p>
                  </div>
                  <div className="card__adresse">{stay.direction}</div>
                  <p>{stay.descriptionLong}</p>
              </div>
          </div>
      </div>
    </div> 
  )
}


