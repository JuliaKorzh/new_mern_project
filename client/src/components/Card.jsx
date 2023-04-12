import React from "react";

export const Card = ()=>{

   return(
      <div className="card" key={card._id}>
               <div className="card__img"><img src={card.image} alt="img"/></div>
               <div className="card__descripcion">
                  <div className="card__flex">
                     <h4>{card.title}</h4>
                     <div className="card__details">
                        <p>{card.price}</p>
                        <p>{card.area}</p>
                     </div>
                     <div className="card__adresse">{card.directions}</div>
                     <p>{card.descriptionShort}</p>
                  </div>
               </div>
            </div>
   )
}