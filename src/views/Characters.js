import React, {useState, useEffect} from "react";
import { Parallax, Background } from 'react-parallax';
import { useParams } from "react-router-dom";
import {getCharacters} from "../classes/apiEndpoints"
import {Character} from '../components/Character';
import {FilterBar} from '../components/FilterBar';
import background from "../assets/DdssjBiUQAAn6VU.jpeg"
import footer from '../assets/foreground.png'
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
    await getCharacters(null, null)
    .then(result => {
      setCharactersInfo(result.info)
    })
    .catch(error => console.log('error', error));
  }

  const getCharacterSearch = async () => {
    if (!search) return
    console.log("checking Search", search)
    await getCharacters(null, search)
    .then(result => {
      console.log(result)
      setCurrentCharacters(result.results)
    })
    .catch(error => console.log('error', error));
  }

  const getRandomCharacters = async (characterIDs) => {
    await getCharacters(characterIDs, null)
    .then(result => {
      setCurrentCharacters(result)
    })
    .catch(error => console.log('error', error));
  }

  const createRandomArray = (count) => {
    return [...Array(20)].map(() => {
      return Math.floor(Math.random() * count);
    })
  }

  useEffect(() => {
   getCharacterInfo()
  }, [])

  useEffect(() => {
    charactersInfo && setCharacterCount(charactersInfo.count)
    charactersInfo && setCharacterPageCount(charactersInfo.pages)
    charactersInfo && parseCurrentPage(charactersInfo.prev)
  }, [charactersInfo])

  useEffect(() => {
   (!search && characterCount) && getRandomCharacters(createRandomArray(characterCount))
  }, [characterCount])

  useEffect(() => {
    currentCharacters.length && createCharacterCards()
  }, [currentCharacters])

  useEffect(() => {
    console.log("searching more", search)
    getCharacterSearch()
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
    console.log("searching", search)
    setSearch(search)
  }

  return (
    <>
    
        <FilterBar view={view} handleSearch={handleSearch}/>
      <div className="Characters">
        <img className="background" src={background} />
        <div className="characterCardsContainer">
          {characterCards}
        </div>
        <img className="footer" src={footer} />
      </div>
    </>
  )
}