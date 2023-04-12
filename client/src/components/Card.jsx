import React from "react";

export const Card = ()=>{
   const cards = [
      {
          _id: "641aee37cc04da12335057ab",
          title: "Lorem ipsum",
          category: "apartment",
          direction: "Darsena de Ca'n Barbara, 07015 Mallorca",
          price: "120$/night",
          area: "82m²",
          descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ipsum ac venenatis placerat. Duis mattis molestie massa, at accumsan nunc tempor vitae. Donec pulvinar felis dolor, vitae luctus mi vulputate sed. Maecenas arcu orci, porttitor eget suscipit in, dignissim vel velit.",
          descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ipsum ac venenatis placerat. Duis mattis molestie massa, at accumsan nunc tempor vitae. Donec pulvinar felis dolor, vitae luctus mi vulputate sed. Maecenas arcu orci, porttitor eget suscipit in, dignissim vel velit. Morbi vel nibh risus. Praesent in magna sollicitudin, volutpat tortor ac, dapibus mi. Suspendisse pretium et urna quis ornare. Suspendisse tincidunt neque tellus. Aenean laoreet pharetra arcu. Nam mollis, metus ultrices cursus feugiat, velit risus consequat tortor, et consequat dui nulla nec mi. Ut venenatis, nibh sit amet gravida bibendum, tortor purus tempus urna, sed congue sapien elit sed dui. Duis posuere enim convallis iaculis molestie.",
          image:"/img/1.jpg"
     },
     
    ]
   return (
      <div className="cards__flex">
         {cards.map(card => (
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
            </div>))}
      </div>
            
   )}
