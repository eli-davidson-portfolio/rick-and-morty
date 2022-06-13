import React, {useState, useEffect} from 'react';
import { getCharacters } from '../classes/apiEndpoints';
import { CharacterSmall } from './CharacterSmall';
import '../styles/Episode.scss'
import tv from "../assets/tv.png"

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
      return <CharacterSmall key={character.id} character={character} />
    })
    setCharacterCards(characterCards)
  }
 
  return ( 
    <div className="Episode"> 
      <div className='static'>
        <div className='screen'>

      <p>S:{season} | E:{episode}</p> 
      <p className='episodeName'>{name}</p> 
      <p>{air_date}</p> 
        </div>
      </div>

    </div> 
  ); 
} 
 

