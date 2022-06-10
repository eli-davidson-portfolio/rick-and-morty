import React, {useState, useEffect} from 'react';
import '../styles/Episode.scss'

export function Episode(props) { 
  let {
    air_date,
    characters,
    created,
    episode,
    id,
    name,
    url,
  } = props.episode

  const [charactersIds, setCharactersIds] = useState([])

  episode = episode.split("E")
  let season = episode[0]
  episode = parseInt(episode[1])
  season = season.split("S")
  season = parseInt(season[1])

  const parseCharacters = () => {
   return characters.map(character => {
      const characterId = character.split("/")
      return characterId.pop()
    });
  }
 
  useEffect(() => { 
    setCharactersIds(parseCharacters())
    return(() => { 
    }) 
  }, []) 
 
  useEffect(() => { 
  }, [charactersIds]) 
 
  return ( 
    <div className="Episode"> 
      <p>Air Date:{air_date}</p> 
      <p>Characters:{charactersIds}</p> 
      <p>created:{created}</p>
      <p>season:{season}</p> 
      <p>episode:{episode}</p> 
      <p>id:{id}</p> 
      <p>name:{name}</p> 
      <p>url:{url}</p> 
    </div> 
  ); 
} 
 

