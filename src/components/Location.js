import React, {useState, useEffect} from 'react';
import '../styles/Location.scss'

export function Location(props) { 
  const {
  created,
  dimension,
  id,
  name,
  residents,
  type,
  url
  } = props.location
 
  useEffect(() => { 
 
    return(() => { 
    }) 
  }, []) 
  
  return ( 
    <div className="Location"> 
      <p>Created:{created}</p> 
      <p>dimension:{dimension}</p> 
      <p>Id:{id}</p> 
      <p>Name:{name}</p> 
      <p>Residents:{residents.count}</p> 
      <p>Type:{type}</p> 
      <p>URL:{url}</p> 
    </div> 
  ); 
} 
 

