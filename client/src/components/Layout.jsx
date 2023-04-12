import React from 'react';
import {Header} from "./Header";
import {Footer} from"./Footer";


export const Layout = ({children}) => {
  return (
    <React.Fragment>                        {/*Фрагменты позволяют формировать список дочерних элементов */}
      <div className="wrapper">
        <Header/>
        {children}
      </div>
      <Footer/>
    </React.Fragment>
  )
}

