import React from "react";
import { Link } from "react-router-dom";

export const Card = ({stay})=>{

   return(
     
         <div className="card">
                  <div className="card__img"><img src={stay.imageUrl} alt="img"/></div>
                  <div className="card__descripcion">
                     <div className="card__flex">
                     <Link to={`/${stay._id}`}><h4>{stay.title}</h4></Link>
                        <div className="card__details">
                           <p>{stay.price} $/nigth</p>
                           <p>{stay.area} m²</p>
                        </div>
                        <div className="card__adresse">{stay.direction}</div>
                        <p>{stay.descriptionShort}</p>
                     </div>
                  </div>
               </div>
      
   )
}