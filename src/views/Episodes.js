
import React, {useState, useEffect} from "react";
import {getEpisodes} from "../classes/apiEndpoints"
import {Episode} from '../components/Episode';
import '../styles/Episodes.scss';

export function Episodes() {
  const [episodesInfo, setEpisodesInfo] = useState({})
  const [episodeCount, setEpisodeCount] = useState(0)
  const [episodePageCount, setEpisodePageCount] = useState(0)
  const [currentEpisodes, setCurrentEpisodes] = useState([])
  const [episodeCards, setEpisodeCards] = useState([])

  const getEpisodeInfo = async () => {
    await getEpisodes()
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

  return (
    <div className="Episodes">
        {episodeCards}
    </div>
  )
}