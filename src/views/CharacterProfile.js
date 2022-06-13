import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getCharacters} from "../classes/apiEndpoints"
import {Character} from '../components/Character';
import {EpisodesContainer} from "../components/EpisodesContainer";
import {TitleBar} from '../components/TitleBar';
import {VarientContainer} from '../components/VarientContainer';
import '../styles/CharactersProfile.scss';
import '../styles/TitleBar.scss'

export function CharacterProfile() {
  const [charactersInfo, setCharactersInfo] = useState({})
  const [characterCount, setCharacterCount] = useState(0)
  const [characterPageCount, setCharacterPageCount] = useState(0)
  const [currentCharacter, setCurrentCharacter] = useState([])
  const [characterCards, setCharacterCards] = useState([])
    const [episodeIds, setEpisodeIds] = useState([])

const {id} = useParams()
  const getCharacterInfo = async () => {
    await getCharacters(id)
    .then(result => {
      setCurrentCharacter(result)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
   getCharacterInfo()
  }, [])

  const parseEpisodeIds = () => {
    const Ids = currentCharacter.episode.map(ep => {
      const epId = ep.split("/").pop()
      return parseInt(epId)
    })
    setEpisodeIds(Ids)
  }

  useEffect(() => {
   currentCharacter.episode && parseEpisodeIds()
  }, [currentCharacter])


  return (
    <div className="CharacterProfile">
      <div className="currentCharacter">
        <div className="TitleBar"> 
              <p>{currentCharacter.name}</p> 
        </div>
        <div className="TitleBar"> 
              <p>{currentCharacter.status} - {currentCharacter.species}</p> 
        </div>
        <img src={currentCharacter.image} alt={currentCharacter.name} />
       { currentCharacter.type && <div className="TitleBar"> 
              <p>Type: {currentCharacter.type}</p> 
        </div> }
        { currentCharacter.gender && <div className="TitleBar"> 
              <p>Gender: {currentCharacter.gender}</p> 
        </div> }
       {currentCharacter.episode && <div className="TitleBar"> 
              <p>Episodes: {currentCharacter.episode.length}</p> 
        </div>}
       { currentCharacter.origin &&  <div className="TitleBar"> 
              <p>Origin: {currentCharacter.origin.name}</p> 
        </div>}
       { currentCharacter.location &&  <div className="TitleBar"> 
              <p>Location: {currentCharacter.location.name}</p> 
        </div>}
      </div>
      {!!episodeIds && <EpisodesContainer episodeIds={episodeIds} />}
      {currentCharacter.name && <VarientContainer id={currentCharacter.id} name={currentCharacter.name}/>}
    </div>
  )
}