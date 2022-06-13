import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Background, Parallax } from 'react-parallax';
import portal from '../assets/portal-rick-and-morty.gif'
import '../styles/VarientContainer.scss'
import { Character } from './Character';

export function CharacterSmall(props) { 
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

<div className='characterSmall'>

        <img className='characterImageSmall' src={character.image} alt={character.name} />
            <div className="characterNameSmall">
              {character.name}
            </div>
</div>
<div className='characterGap'>

</div>
</>


  ); 
} 
 

