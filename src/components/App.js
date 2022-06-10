import React, {useState, useEffect, Component} from 'react';
import '../styles/App.scss';
import {getCharactors, getLocations, getEpisodes} from "../classes/apiEndpoints"
import {Character} from './Character';
import {Location} from './Location';

function App() {
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])

  const [locationInfo, setLocationInfo] = useState({})
  const [locationCount, setLocationCount] = useState(0)
  const [locationPageCount, setLocationPageCount] = useState(0)
  const [currentLocations, setCurrentLocations] = useState([])
  const [locationCards, setLocationCards] = useState([])

  const getCharacterInfo = async () => {
    await getCharactors()
    .then(result => {
      setCharactersInfo(result.info)
      setCurrentCharacters(result.results)
    })
    .catch(error => console.log('error', error));
  }

  const getLocationInfo = async () => {
    await getLocations()
    .then(result => {
      console.log(result)
      setLocationInfo(result.info)
      setCurrentLocations(result.results)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getCharacterInfo()
    getLocationInfo()
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
    console.log("location info did update")

    setLocationCount(locationInfo.count)
    setLocationPageCount(locationInfo.pages)
  }, [locationInfo])

  useEffect(() => {
  console.log("Character Count did update")
  console.log("Character Count: ", characterCount)
  console.log("Pages: ",characterPageCount)
  }, [characterCount])

  useEffect(() => {
  console.log("location Count did update")
  console.log("location Count: ", locationCount)
  console.log("Pages: ",locationPageCount)
  }, [locationCount])

  useEffect(() => {
  console.log("Current Characters did update")
  console.log("characters: ", currentCharacters)
  createCharacterCards()
  }, [currentCharacters])

  useEffect(() => {
    console.log("Current locations did update")
    console.log("locations: ", currentLocations)
    createLocationCards()
  }, [currentLocations])

  const createCharacterCards = () => {
    const characterCards = currentCharacters.map(character => {
      return <Character key={character.id} character={character} />
    })
    setCharacterCards(characterCards)
  }

  const createLocationCards = () => {
    const locationCards = currentLocations.map(location => {
      return <Location key={location.id} location={location} />
    })
    setLocationCards(locationCards)
  }
  
  return (
    <div className="App">
      {/* {characterCards} */}
      {locationCards}
    </div>
  );
}

export default App;
