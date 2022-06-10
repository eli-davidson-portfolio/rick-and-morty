import React, {useState, useEffect} from 'react';
import '../styles/FilterBar.scss'

export function FilterBar(props) { 
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [type, setType] = useState('')
  const [gender, setGender] = useState('')
 
  useEffect(() => { 
    console.log("FilterBar did mount") 
 
    return(() => { 
    console.log("FilterBar will unmount") 
    }) 
  }, [])
  
  const clearSearch = () => {
    setName('')
    setStatus('')
    setSpecies('')
    setType('')
    setGender('')
  }
 
  const handleChange = (e) => {
    const {name, value} = e.target
    switch(name) {
      case "name":
        setName(value)
      break;
      case "species":
        setSpecies(value)
      break;
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      let search = [];
      if (name) search.push(`name=${name}`)
      if (species) search.push(`species=${species}`)
      if (search.length > 1) {
        search = search.join("&")    
      } 
      console.log(props)
      props.handleSearch(search)
      clearSearch()
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
      <input 
      type="text" 
      name='species'
      placeholder='Species' 
      value={species} 
      onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
    </div> 
  ); 
} 
 
export default FilterBar; 
