import React, {useState, useEffect} from "react";
import {getLocations} from "../classes/apiEndpoints"
import {Location} from '../components/Location';
import {FilterBar} from '../components/FilterBar';
import '../styles/Locations.scss';

export function Locations() {
  const [view, setView] = useState('location')
  const [search, setSearch] = useState('')
  const [locationsInfo, setLocationsInfo] = useState({})
  const [locationCount, setLocationCount] = useState(0)
  const [locationPageCount, setLocationPageCount] = useState(0)
  const [currentLocations, setCurrentLocations] = useState([])
  const [locationCards, setLocationCards] = useState([])

  const getLocationInfo = async () => {
    await getLocations(null, search)
    .then(result => {
      setLocationsInfo(result.info)
      setCurrentLocations(result.results)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
   getLocationInfo()
  }, [])

  useEffect(() => {
   getLocationInfo()
  }, [search])

  useEffect(() => {
    setLocationCount(locationsInfo.count)
    setLocationPageCount(locationsInfo.pages)
  }, [locationsInfo])

  useEffect(() => {
    createLocationCards()
  }, [currentLocations])

  const createLocationCards = () => {
    const locationCards = currentLocations.map(location => {
      return <Location key={location.id} location={location} />
    })
    setLocationCards(locationCards)
  }

  const handleSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
    <FilterBar view={view} handleSearch={handleSearch}/>
    <div className="Locations">
        {locationCards}
    </div>
    </>
  )
}