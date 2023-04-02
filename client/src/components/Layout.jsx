import React from 'react';
import {Header} from "./Header";


export const Layout = ({children}) => {
  return (
    <React.Fragment>
       <div className="wrapper">
      <Header/>
      {children}
    </div>
    </React.Fragment>
  )
}

