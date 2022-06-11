import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
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
    <Link to={`/characters/${character.id}`}>

      <div className="Character"> 
        <Parallax className='Character__image' blur={0} bgImage={character.image} bgImageAlt={character.name} strength={50} >

                <p>{character.name}</p>

        </Parallax>
        {character.id && <div className='Character__information'>
          <div className='Character__information__left'>
              <p>id:{character.id}</p> 
              <p>created:{character.created}</p> 
              <p>episodes:{character.episode.length}</p> 
              <p>gender:{character.gender}</p> 
          </div>
          <div className='Character__information__right'>
              <p>location name:{location.name}</p> 
              <p>location id:{location.id}</p> 
              <p>origin:{origin.name}</p>
              <p>origin id:{origin.id}</p> 
              <p>species:{character.species}</p>
              <p>type:{character.type}</p> 
          </div>
        </div>}
      </div> 
    </Link>
  ); 
} 
 

