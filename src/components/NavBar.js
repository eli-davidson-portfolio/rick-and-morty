import React, {useState, useEffect} from 'react';
import logo from "../assets/rick-and-morty-logo.png"
import wordsLogo from "../assets/Rick_and_Morty_word_logo.png"
import '../styles/NavBar.scss'
import {
  Switch,
  Route,
  Link,
  Routes,
  NavLink
} from "react-router-dom";

export function NavBar() { 
  useEffect(() => { 
    console.log("NavBar did mount") 
 
    return(() => { 
    console.log("NavBar will unmount") 
    }) 
  }, []) 
  
  return ( 
      <nav className='NavBar'>
        <Link to="/">


        <img className='logo' src={logo}/>
        </Link>
           <Link to="/">
        <img className='wordsLogo' src={wordsLogo}/>
             </Link>
        <div className='linkContainer'>


        </div>
      </nav>
  ); 
} 

