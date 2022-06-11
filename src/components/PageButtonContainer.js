import React, {useState, useEffect} from 'react';
import { PageButton } from '../components/PageButton'
import '../styles/PageButtonContainer.scss'

export function PageButtonContainer() { 
  const [id, setID] = useState('') 
 
  useEffect(() => { 
    console.log("PageButtonContainer did mount") 
 
    return(() => { 
    console.log("PageButtonContainer will unmount ") 
    }) 
  }, []) 
 
    useEffect(() => { 
    console.log("PageButtonContainer did update") 
 
 
  }, [id]) 
 
  return ( 
    <div className="PageButtonContainer"> 
      <PageButton />
      <PageButton />
      <PageButton />
      <PageButton />
      <PageButton />
    </div> 
  ); 
} 

