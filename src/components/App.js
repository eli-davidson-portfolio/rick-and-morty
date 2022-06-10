import React, {useState, useEffect, Component} from 'react';
import '../styles/App.scss';
import {getCharactors, getLocations, getEpisodes} from "../classes/apiEndpoints"
import CharacterCard from './Character';

function App() {
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])

  const getCharacterInfo = async () => {
    await getCharactors()
    .then(result => {
      setCharactersInfo(result.info)
      setCurrentCharacters(result.results)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getCharacterInfo()
    return(() => {
    console.log("App will unmount ")
    })
  }, [])

  useEffect(() => {
  console.log("Characters info did update")

  setCharacterCount(charactersInfo.count)
  setCharacterPageCount(charactersInfo.pages)
  }, [charactersInfo])

  useEffect(() => {
  console.log("Character Count did update")
  console.log("Character Count: ", characterCount)
  console.log("Pages: ",characterPageCount)
  }, [characterCount])

  useEffect(() => {
  console.log("Current Characters did update")
  console.log("characters: ", currentCharacters)
  createCharacterCards()
  }, [currentCharacters])

  const createCharacterCards = () => {
    const characterCards = currentCharacters.map(character => {
      return <CharacterCard key={character.id} character={character} />
    })
    setCharacterCards(characterCards)
  }
  
  return (
    <div className="App">
      {characterCards}
    </div>
  );
}

export default App;
