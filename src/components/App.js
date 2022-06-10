import React, {useState, useEffect, Component} from 'react';
import '../styles/App.scss';
import {getCharactors, getLocations, getEpisodes} from "../classes/apiEndpoints"
import {Character} from './Character';
import {Location} from './Location';
import {Episode} from './Episode'

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

  const [episodeInfo, setEpisodeInfo] = useState({})
  const [episodeCount, setEpisodeCount] = useState(0)
  const [episodePageCount, setEpisodePageCount] = useState(0)
  const [currentEpisodes, setCurrentEpisodes] = useState([])
  const [episodeCards, setEpisodeCards] = useState([])

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
      setLocationInfo(result.info)
      setCurrentLocations(result.results)
    })
    .catch(error => console.log('error', error));
  }

  const getEpisodeInfo = async () => {
    await getEpisodes()
    .then(result => {
      setEpisodeInfo(result.info)
      setCurrentEpisodes(result.results)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getCharacterInfo()
    getLocationInfo()
    getEpisodeInfo()
    return(() => {
    })
  }, [])

  useEffect(() => {
  setCharacterCount(charactersInfo.count)
  setCharacterPageCount(charactersInfo.pages)
  }, [charactersInfo])

  useEffect(() => {
  setLocationCount(locationInfo.count)
  setLocationPageCount(locationInfo.pages)
  }, [locationInfo])

  useEffect(() => {
  setEpisodeCount(episodeInfo.count)
  setEpisodePageCount(episodeInfo.pages)
  }, [episodeInfo])

  useEffect(() => {
  createCharacterCards()
  }, [currentCharacters])

  useEffect(() => {
    createLocationCards()
  }, [currentLocations])

  useEffect(() => {
    createEpisodeCards()
  }, [currentEpisodes])

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

  const createEpisodeCards = () => {
    const episodeCards = currentEpisodes.map(episode => {
      return <Episode key={episode.id} episode={episode} />
    })
    setEpisodeCards(episodeCards)
  }
  
  return (
    <div className="App">
      {characterCards}
      {locationCards}
      {episodeCards}
    </div>
  );
}

export default App;
