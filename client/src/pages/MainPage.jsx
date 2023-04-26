import React, { useEffect } from 'react';
import { useState } from 'react';
import bgi from "../static/bgi.jpg";
import { CardsAll } from '../components/CardsAll';



export const MainPage = () => {

//Filter___________
//_Categorie of properties
const arrCategories = ["room", "apartment", "hotel room", "all"]
const [selectedCategory, setSelectedCategory] = useState("all")
const changeCategory = event => {
  setSelectedCategory (event.target.value)
}
const categories = arrCategories.map((category, idx)=>{
  return <option key ={idx}>{category}</option>
})

//__Price_____
const [selectedPrice, setSelectedPrice] = useState(0)
const changePrice = event =>{
  setSelectedPrice(event.target.value)
}
//__Area____

const [selectedArea, setSelectedArea] = useState(0)
const changeArea = event =>{
  setSelectedArea(event.target.value)
}



  return (
    <main>
      <section className="beginning">
          <div className="beginning__container container">
            <div className="beginning__flex">
              <h1>FIND YOUR STAY AWAIT FROM HOME</h1>
           </div>
           <img src={bgi} alt="background"/>
          </div>
        </section>
      <section className="content">
          <div className="content__container container">
            <div className="content__flex">
              <div className="content__filters filters">
              <div className="filters__flex">
                <h5>Property type</h5>
                <select value = {selectedCategory}   onChange = {changeCategory} >{categories}</select>      
                <h5>Price</h5>
                <div className="filter__slider">
                    <input type = "range" min="0" max="500"  value={selectedPrice} onChange={changePrice}/>
                    <p>{selectedPrice} $/nigth</p>
                </div>
                <h5>Area</h5>
                <div className="filter__slider">
                  <input type = "range" min="0" max="200"  value={selectedArea} onChange={changeArea}/>
                  <p>{selectedArea} m²</p>
                </div>
              </div>
              </div>
              <div className="content__cards cards">
                <CardsAll selectedCategory={selectedCategory} selectedPrice={selectedPrice} selectedArea={selectedArea}/>
               </div>
              </div>
            </div>
        </section>
      
    </main>
  )
}

