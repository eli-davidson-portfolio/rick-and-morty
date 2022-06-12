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
        <img src={logo}/>
        <img src={wordsLogo}/>
        <div className='linkContainer'>

        <NavLink activeClassName="active" to="/characters">Characters</NavLink>
        <NavLink activeClassName="active" to="/episodes">Episodes</NavLink>
        <NavLink activeClassName="active" to="/locations">Locationss</NavLink>
        </div>
      </nav>
  ); 
} 

