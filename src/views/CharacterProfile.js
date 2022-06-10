import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getCharacters} from "../classes/apiEndpoints"
import {Character} from '../components/Character';
import {TitleBar} from '../components/TitleBar';
import '../styles/Characters.scss';

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

  return (
    <div className="CharacterProfile">
        <TitleBar name={currentCharacter.name} species={currentCharacter.species}/>
        <Character key={currentCharacter.id} character={currentCharacter} />
    </div>
  )
}