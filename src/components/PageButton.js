import React, {useState, useEffect} from 'react';
import '../styles/PageButton.scss'


export function PageButton() { 
  const [id, setID] = useState('') 
 
  useEffect(() => { 
    console.log("PageButton did mount") 
 
    return(() => { 
    console.log("PageButton will unmount ") 
    }) 
  }, []) 
 
    useEffect(() => { 
    console.log("PageButton did update") 
 
 
  }, [id]) 
 
  return ( 
    <div className="PageButton"> 
      <button >1</button>
    </div> 
  ); 
} 

