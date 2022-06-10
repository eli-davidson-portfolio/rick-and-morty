import React, {useState, useEffect, Component} from 'react';
import {
  Switch,
  Route,
  Link,
  Routes,
  NavLink
} from "react-router-dom";
import '../styles/App.scss';
import {getCharacters, getLocations, getEpisodes} from "../classes/apiEndpoints"
import { Characters } from '../views/Characters';
import {Character} from './Character';
import {Location} from './Location';
import {Episode} from './Episode'

function App() {
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
   // getCharacterInfo()
  //  getLocationInfo()
  // getEpisodeInfo()
    return(() => {
    })
  }, [])

  useEffect(() => {
  setLocationCount(locationInfo.count)
  setLocationPageCount(locationInfo.pages)
  }, [locationInfo])

  useEffect(() => {
  setEpisodeCount(episodeInfo.count)
  setEpisodePageCount(episodeInfo.pages)
  }, [episodeInfo])



  useEffect(() => {
    createLocationCards()
  }, [currentLocations])

  useEffect(() => {
    createEpisodeCards()
  }, [currentEpisodes])



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
      <nav className='navBar'>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
      <Routes>
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
