import React, {useState, useEffect} from 'react';
import { PageButton } from '../components/PageButton'
import '../styles/PageButtonContainer.scss'

export function PageButtonContainer() { 
  const [id, setID] = useState('') 
 


 
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

