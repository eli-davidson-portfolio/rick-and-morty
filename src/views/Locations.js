import React, {useState, useEffect} from "react";
import {getLocations} from "../classes/apiEndpoints"
import {Location} from '../components/Location';
import '../styles/Locations.scss';

export function Locations() {
  const [locationsInfo, setLocationsInfo] = useState({})
  const [locationCount, setLocationCount] = useState(0)
  const [locationPageCount, setLocationPageCount] = useState(0)
  const [currentLocations, setCurrentLocations] = useState([])
  const [locationCards, setLocationCards] = useState([])

  const getLocationInfo = async () => {
    await getLocations()
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

  return (
    <div className="Locations">
        {locationCards}
    </div>
  )
}