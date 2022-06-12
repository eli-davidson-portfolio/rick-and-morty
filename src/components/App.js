import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Route, Routes, Switch } from "react-router-dom";
import { NavBar } from './NavBar'
import { Characters } from '../views/Characters';
import { CharacterProfile } from '../views/CharacterProfile';
import { Episodes } from '../views/Episodes';
import { Locations } from '../views/Locations';

import '../styles/App.scss';

function App() {
  return (
    <div className="App">
    <NavBar />
      <main className="main">
          <Routes>
            <Route exact path="/" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/characters/:id" element={<CharacterProfile />} />
          </Routes>
      </main>

      

    </div>
  );
}

export default App;
