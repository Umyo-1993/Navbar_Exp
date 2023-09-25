import React from "react";
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import './navbar.css'
import  Hamburger  from '../../assets/Hamburger_icon.png'
import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

const Navbar=()=>{

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
    return( 
        <BrowserRouter>
        <div className="navbar">
   <div className="container">
   <div className="menu-icon"onClick={handleShowNavbar}>
   <img src={Hamburger} alt="Logo" height="40px" width="30px" />
        </div>
    <div className={`nav-elements  ${showNavbar && 'active'}`}onClick={handleShowNavbar}>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/">Projects</NavLink>
            </li>
            <li>
            <NavLink to="/">Contacts</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </div>

   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
   
    </BrowserRouter>
    )
           
}
export default Navbar;