import React, {useState, useEffect} from 'react';
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
        <NavLink activeClassName="active" to="/characters">Characters</NavLink>
        <NavLink activeClassName="active" to="/episodes">Episodes</NavLink>
        <NavLink activeClassName="active" to="/locations">Locationss</NavLink>
      </nav>
  ); 
} 

