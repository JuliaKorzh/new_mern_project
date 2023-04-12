import React from 'react';
import {Filters} from "../components/Filters";
import bgi from "../static/bgi.jpg";
import { CardsAll } from '../components/CardsAll';

export const MainPage = () => {
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
                <Filters/>
              </div>
              <div className="content__cards cards">
                <CardsAll/>
               </div>
              </div>
            </div>
        </section>
    </main>
  )
}

