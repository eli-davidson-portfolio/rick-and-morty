import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Background, Parallax } from 'react-parallax';
import portal from '../assets/portal-rick-and-morty.gif'
import '../styles/Character.scss'

export function Character(props) { 
  const [character, setCharacter] = useState({})
  const [location, setLocation] = useState({})
  const [origin, setOrigin] = useState({})

  useEffect(() => { 
    setCharacter(props.character)
 
    return(() => { 
    }) 
  }, []) 
 
    useEffect(() => { 
      character.id && parseLocation()
      character.id && parseOrigin()
 
    }, [character.id]) 

    const parseLocation = () => {
      if (character.location.url) {
        var locationID = character.location.url.split("/").pop()
      } else {
        var locationID = 0
      }
      setLocation({
        id: locationID,
        name: character.location.name,
      })
    }

    const parseOrigin = () => {
      if (character.origin.url) {
        var originID = character.origin.url.split("/").pop()
      } else {
        var originID = 0
      }
      setOrigin({
        id: originID,
        name: character.origin.name,
      })
    }
  return ( 
    <>
    <Link to={`/characters/${character.id}`}>
      <div className="Character"> 
        <div className="portal">
          <img className="characterImage" src={character.image} alt={character.name} />
        </div>
      </div> 
    </Link>
      <div className="characterName">
        <p>{character.name}</p>
      </div>
    </>
  ); 
} 
 

