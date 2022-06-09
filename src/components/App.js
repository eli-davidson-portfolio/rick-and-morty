import React, {useState, useEffect, Component} from 'react';
import '../styles/App.scss';
import {getCharactors, getLocations, getEpisodes} from "../classes/apiEndpoints"
import { Character } from '../classes/Character';

function App() {
  const [id, setID] = useState('')
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacters, setCurrentCharacters] = useState([])

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
  createCharacterObjects()
  }, [currentCharacters])

  const createCharacterObjects = () => {
    const characterObjects = currentCharacters.map(character => {
      console.log(character)
      return new Character(character)
    })
    console.log(characterObjects)
  }
  

  return (
    <div className="App">
      <p>App with id:{id}</p>
    </div>
  );
}

export default App;
