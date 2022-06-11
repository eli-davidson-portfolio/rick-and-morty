
import React, {useState, useEffect} from "react";
import {getEpisodes} from "../classes/apiEndpoints"
import {Episode} from '../components/Episode';
import {FilterBar} from '../components/FilterBar';
import '../styles/Episodes.scss';

export function Episodes() {
  const [view, setView] = useState('episode')
  const [search, setSearch] = useState('')
  const [episodesInfo, setEpisodesInfo] = useState({})
  const [episodeCount, setEpisodeCount] = useState(0)
  const [episodePageCount, setEpisodePageCount] = useState(0)
  const [currentEpisodes, setCurrentEpisodes] = useState([])
  const [episodeCards, setEpisodeCards] = useState([])

  const getEpisodeInfo = async () => {
    await getEpisodes(null, search)
    .then(result => {
      setEpisodesInfo(result.info)
      setCurrentEpisodes(result.results)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
   getEpisodeInfo()
  }, [])

  useEffect(() => {
    getEpisodeInfo()
  }, [search])

  useEffect(() => {
    setEpisodeCount(episodesInfo.count)
    setEpisodePageCount(episodesInfo.pages)
  }, [episodesInfo])

  useEffect(() => {
    createEpisodeCards()
  }, [currentEpisodes])

  const createEpisodeCards = () => {
    const episodeCards = currentEpisodes.map(episode => {
      return <Episode key={episode.id} episode={episode} />
    })
    setEpisodeCards(episodeCards)
  }

  const handleSearch = (search) => {
    console.log("Handle Search", search)
    setSearch(search)
  }

  return (
    <>
    <FilterBar view={view} handleSearch={handleSearch}/>
    <div className="Episodes">
        {episodeCards}
    </div>
    </>
  )
}