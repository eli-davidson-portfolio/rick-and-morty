import React, {useState, useEffect} from 'react';
import '../styles/TitleBar.scss'

export function TitleBar(props) { 

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('')
  useEffect(() => {
    props.name && setName(props.name)
    props.species && setSpecies(props.species)
  }, [props])

  return ( 
    <div className="TitleBar"> 
      <p>{name} - {species}</p> 
    </div> 
  ); 
} 
 
