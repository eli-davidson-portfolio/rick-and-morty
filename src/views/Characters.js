import React, {useState, useEffect} from "react";
import {getCharacters} from "../classes/apiEndpoints"
import {Character} from '../components/Character';
import '../styles/Characters.scss';

export function Characters() {
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])

  const getCharacterInfo = async () => {
    await getCharacters()
    .then(result => {
      setCharactersInfo(result.info)
      setCurrentCharacters(result.results)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
   getCharacterInfo()
  }, [])

  useEffect(() => {
    setCharacterCount(charactersInfo.count)
    setCharacterPageCount(charactersInfo.pages)
  }, [charactersInfo])

  useEffect(() => {
    createCharacterCards()
  }, [currentCharacters])

  const createCharacterCards = () => {
    const characterCards = currentCharacters.map(character => {
      return <Character key={character.id} character={character} />
    })
    setCharacterCards(characterCards)
  }

  return (
    <div className="Characters">
        {characterCards}
    </div>
  )
}