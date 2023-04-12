import React from "react";

export const Filters = ()=>{


   return (
<div className="filters__flex">
   <h5>Property type</h5>
   <input placeholder="all"/>          
   <h5>Price</h5>
   <div className="filter__minmax">
      <input type="number" placeholder="min"/>
      <input type="number" placeholder="max"/>
   </div>
   <h5>Area</h5>
   <div className="filter__minmax">
      <input type="number" placeholder="min"/>
      <input type="number" placeholder="max"/>
   </div>
</div>
   )
}