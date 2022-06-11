import React, {useState, useEffect} from 'react';
import '../styles/FilterBar.scss'

export function FilterBar(props) { 
  const [view, setView] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [type, setType] = useState('')
  const [gender, setGender] = useState('')
  const [dimension, setDimension] = useState('')
  const [episode, setEpisode] = useState('')
 
  useEffect(() => { 
    setView(props.view)
 
    return(() => { 
    console.log("FilterBar will unmount") 
    }) 
  }, [])

  useEffect(() => { 
    console.log("Searching", search)
    search && props.handleSearch(search)
    clearSearch()
  }, [search])

  const clearSearch = () => {
    setPage('')
    setName('')
    setStatus('')
    setSpecies('')
    setType('')
    setGender('')
    setDimension('') //locations
    setEpisode('') //episodes
    setSearch('')
  }
 
  const handleChange = (e) => {
    const {name, value} = e.target
    switch(name) {
      case "page":
        setPage(value)
      break;
      case "name":
        setName(value)
      break;
      case "status":
        setStatus(value)
      break;
      case "species":
        setSpecies(value)
      break;
      case "type":
        setType(value)
      break;
      case "gender":
        setGender(value)
      break;
      case "dimension":
        setDimension(value) //locations
      break;
      case "episode":
        setEpisode(value) //episodes
      break;
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      let searchInputs = [];
      if (page) searchInputs.push(`page=${name}`)
      if (name) searchInputs.push(`name=${name}`)
      if (species) searchInputs.push(`species=${species}`)
      if (status) searchInputs.push(`status=${status}`)
      if (type) searchInputs.push(`type=${type}`)
      if (gender) searchInputs.push(`gender=${gender}`)
      if (dimension) searchInputs.push(`dimension=${dimension}`)
      if (episode) searchInputs.push(`episode=${episode}`)
      if (!searchInputs.length) return
      if (searchInputs.length > 1) {
        searchInputs = searchInputs.join("&")    
      }
      setSearch(`?${searchInputs}`) 
    }

  return ( 
    <div className="FilterBar"> 
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name='name'
      placeholder='Name' 
      value={name} 
      onChange={handleChange} />
{(view === "character") && <select 
      name='status'
      placeholder='Status' 
      value={status} 
      onChange={handleChange} >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>}
{(view === "character") && <input 
      type="text" 
      name='species'
      placeholder='Species' 
      value={species} 
      onChange={handleChange} />}
{(view !== "episode") && <input 
      type="text" 
      name='type'
      placeholder='Type' 
      value={type} 
      onChange={handleChange} />}
{(view === "character") && <select 
      name='gender'
      placeholder='Gender' 
      value={gender} 
      onChange={handleChange} >
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>}
{(view === "location") && <input 
      type="text" 
      name='dimension'
      placeholder='Dimension' 
      value={dimension} 
      onChange={handleChange} />}
{(view === "episode") && <input 
      type="text" 
      name='episode'
      placeholder='Episode' 
      value={episode} 
      onChange={handleChange} />}
      <button type="submit">Search</button>
    </form>
    </div> 
  ); 
} 
 
export default FilterBar; 
