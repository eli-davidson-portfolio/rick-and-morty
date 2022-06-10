import React, {useState, useEffect} from 'react';
import { getCharacters } from '../classes/apiEndpoints';
import { Character } from './Character';
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
  const [charactersInfo, setCharactersInfo] = useState({})
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])

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
   (charactersIds.length === characters.length)  && getCharacterInfo(charactersIds)
  }, [charactersIds])

  useEffect(() => { 
    currentCharacters && createCharacterCards()
  }, [currentCharacters])

  const getCharacterInfo = async (charactersIds) => {
    console.log(id)
    console.log(charactersIds)
    await getCharacters(charactersIds)
    .then(result => {
      // setCharactersInfo(result.info)
      result.sort((a,b) => {
        return a.created - b.created
      })
      setCurrentCharacters(result)
    })
    .catch(error => console.log('error', error));
  }

  const createCharacterCards = () => {
    const characterCards = currentCharacters.map(character => {
      return <Character key={character.id} character={character} />
    })
    setCharacterCards(characterCards)
  }
 
  return ( 
    <div className="Episode"> 
      <p>Air Date:{air_date}</p> 
      <p>created:{created}</p>
      <p>season:{season}</p> 
      <p>episode:{episode}</p> 
      <p>id:{id}</p> 
      <p>name:{name}</p> 
      <p>url:{url}</p> 
      <p>Characters:{characterCards}</p> 
    </div> 
  ); 
} 
 

