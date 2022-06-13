import React, {useState, useEffect} from 'react';
import {getCharacters} from "../classes/apiEndpoints"
import {CharacterSmall} from '../components/CharacterSmall';
import '../styles/VarientContainer.scss'

export function VarientContainer(props) { 
  const [id, setID] = useState('') 
  const [name, setName] = useState('')
  const [charactersInfo, setCharactersInfo] = useState({})
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])
  
  const getVatientInfo = async () => {
    const names = name.split(" ")
    for(let i in names) {
      await getCharacters(null, `?name=${names[i]}`)
      .then(result => {
        setCharactersInfo(result.info)
        setCurrentCharacters(prevCharacters => [...prevCharacters, ...result.results])
    })
    .catch(error => console.log('error', error));
    }
    
  }

  const createCharacterCards = () => {
    const allCards = currentCharacters.map(character => {
      if(character.id != id) return <CharacterSmall key={character.id} character={character} />
    })
    const characterCards = [...new Set(allCards)];
    setCharacterCards(characterCards)
  }
 
  useEffect(() => { 
    setID(props.id)
    setName(props.name)

  }, []) 
 
  useEffect(() => { 
    name && getVatientInfo()
  }, [name])
  
  useEffect(() => { 
    createCharacterCards()
  }, [charactersInfo]) 
 
  return ( 
    <div className="VarientContainer"> 
      <p>Related to: {name}</p> 
      <div className="wrapper">
            {characterCards}
      </div>
    </div> 
  ); 
} 

