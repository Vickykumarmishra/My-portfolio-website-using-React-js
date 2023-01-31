import React from 'react'
import {BrowserRouter,NavLink,Outlet } from 'react-router-dom'
import Contact from './Contact'
export default function Navbar() {
  return (
    <div >


      {/**Navbar starts Here*/}

<nav className="navbar navbar-light bg-light" >
  <div className="container-fluid" style={{background:'black'}}>
    <BrowserRouter><NavLink className="navbar-brand" to="/Home" style={{color:'lightgreen'}}><b>vicky mishra's Portfolio</b></NavLink></BrowserRouter>
  </div>
</nav>
{/**Navbar ends here*/}

      
    </div>
  )
}
