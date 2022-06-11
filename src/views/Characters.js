import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getCharacters} from "../classes/apiEndpoints"
import {Character} from '../components/Character';
import {FilterBar} from '../components/FilterBar';
import {PageButtonContainer} from '../components/PageButtonContainer'
import '../styles/Characters.scss';

export function Characters() {
  const [view, setView] = useState('character')
  const [search, setSearch] = useState('')
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])
  

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
    console.log(charactersInfo)
    setCharacterCount(charactersInfo.count)
    setCharacterPageCount(charactersInfo.pages)
    parseCurrentPage(charactersInfo.prev)
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

  const parseCurrentPage = (prevPage) => {
    let currentPage = 0
    if(prevPage) {
      currentPage = prevPage + 1;
    } else {
      currentPage = 1
    }
    return currentPage
  }

  const handleSearch = (search) => {
    console.log("Handle Search", search)
    setSearch(search)
  }

  return (
      <>
        <FilterBar view={view} handleSearch={handleSearch}/>
        <div className="Characters">
            {characterCards}
        </div>
        <PageButtonContainer 
          currentPage={currentPage} 
          characterPageCount={characterPageCount}
        />
      </>
  )
}