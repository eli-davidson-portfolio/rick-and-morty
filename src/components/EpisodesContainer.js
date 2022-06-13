import React, {useState, useEffect} from 'react';
import {getEpisodes} from "../classes/apiEndpoints"
import {Episode} from '../components/Episode';
import '../styles/EpisodesContainer.scss'

export function EpisodesContainer(props) { 
  const [view, setView] = useState('episode')
  const [search, setSearch] = useState('')
  const [episodesIds, setEpisodesIds] = useState('')
  const [episodesInfo, setEpisodesInfo] = useState({})
  const [episodeCount, setEpisodeCount] = useState(0)
  const [episodePageCount, setEpisodePageCount] = useState(0)
  const [currentEpisodes, setCurrentEpisodes] = useState([])
  const [episodeCards, setEpisodeCards] = useState([])

  const getEpisodeInfo = async () => {
    if (!episodesIds) return
    await getEpisodes(episodesIds, null)
    .then(result => {
      if (props.episodeIds.length === 1) {
        setCurrentEpisodes([result])
      }  else {
        setCurrentEpisodes(result)
      }
    })
    .catch(error => console.log('error', error));
  }

  if (props.episodeIds!== episodesIds) {setEpisodesIds(props.episodeIds)}
  useEffect(() => {
    !!props.episodesIds && setEpisodesIds([...props.episodeIds])
  }, [])

  useEffect(() => {
   !!episodesIds.length && getEpisodeInfo()
  }, [episodesIds])

  useEffect(() => {
    episodesInfo && setEpisodeCount(episodesInfo.count)
    episodesInfo && setEpisodePageCount(episodesInfo.pages)
  }, [episodesInfo])

  useEffect(() => {
    currentEpisodes && createEpisodeCards()
  }, [currentEpisodes])

  const createEpisodeCards = () => {
    const episodeCards = currentEpisodes.map(episode => {
      return <Episode key={episode.id} episode={episode} />
    })
    setEpisodeCards(episodeCards)
  }

  const handleSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
    <div className="EpisodesContainer">
        {episodeCards}
    </div>
    </>
  )
} 
 
