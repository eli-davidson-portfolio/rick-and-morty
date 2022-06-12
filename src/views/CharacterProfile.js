import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getCharacters} from "../classes/apiEndpoints"
import {Character} from '../components/Character';
import {TitleBar} from '../components/TitleBar';
import {VarientContainer} from '../components/VarientContainer';
import '../styles/CharactersProfile.scss';
import '../styles/TitleBar.scss'

export function CharacterProfile() {
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacter, setCurrentCharacter] = useState([])
  const [characterCards, setCharacterCards] = useState([])

const {id} = useParams()

console.log(id)

  const getCharacterInfo = async () => {
    await getCharacters(id)
    .then(result => {
      setCurrentCharacter(result)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
   getCharacterInfo()
  }, [])

  console.log(currentCharacter)

  return (
    <div className="CharacterProfile">
      <div className="currentCharacter">
        <div className="TitleBar"> 
              <p>{currentCharacter.name} - {currentCharacter.species}</p> 
        </div>
        <img src={currentCharacter.image} alt={currentCharacter.name} />
        <div className="TitleBar"> 
              <p>{currentCharacter.status} - {currentCharacter.species}</p> 
        </div>
      </div>
      {currentCharacter.name && <VarientContainer id={currentCharacter.id} name={currentCharacter.name}/>}
    </div>
  )
}