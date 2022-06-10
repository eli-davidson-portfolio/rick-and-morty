import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getCharacters} from "../classes/apiEndpoints"
import {Character} from '../components/Character';
import {FilterBar} from '../components/FilterBar'
import '../styles/Characters.scss';

export function Characters() {
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])
  const [search, setSearch] = useState('')

  const getCharacterInfo = async () => {
    await getCharacters(null, search)
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

  useEffect(() => {
    getCharacterInfo()
  }, [search])

  const createCharacterCards = () => {
    const characterCards = currentCharacters.map(character => {
      return <Character key={character.id} character={character} />
    })
    setCharacterCards(characterCards)
  }

  const handleSearch = (search) => {
    setSearch(search)
  }

  return (
      <>
        <FilterBar handleSearch={handleSearch}/>
        <div className="Characters">
            {characterCards}
        </div>
      </>
  )
}