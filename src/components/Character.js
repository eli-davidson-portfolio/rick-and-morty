import React, {useState, useEffect} from 'react';
import '../styles/Character.scss'

export function Character(props) { 
  const [character, setCharacter] = useState({})
  const [location, setLocation] = useState({})
   const [origin, setOrigin] = useState({})

  useEffect(() => { 
    console.log("CharacterCard did mount") 
    setCharacter(props.character)
 
    return(() => { 
    console.log("CharacterCard will unmount") 
    }) 
  }, []) 
 
    useEffect(() => { 
      console.log("CharacterCard did update") 
      console.log(character)
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
    <div className="Character"> 
      <div className='Character__image'>
        <img src={character.image} alt={character.name}/>
      </div>
      {character.id && <div className='Character__information'>
        <div className='Character__information__left'>
            <p>id:{character.id}</p> 
            <p>name:{character.name}</p>
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
  ); 
} 
 

