import React, {useState, useEffect, Component} from 'react';
import '../styles/App.scss';

function App() {
  const [id, setID] = useState('')

  useEffect(() => {
    console.log("App did mount")

    return(() => {
    console.log("App will unmount ")
    })
  }, [])

    useEffect(() => {
    console.log("App did update")


  }, [id])

  return (
    <div className="App">
      <p>App with id:{id}</p>
    </div>
  );
}

export default App;
