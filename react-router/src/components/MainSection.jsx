import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import Koala from './Koala';

export default function MainSection() {
    
  return (
      
      <main id="main-section">

        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />   
          <Route path="/koala" element={<Koala />} /> 
          <Route path="/" element={<Home />} /> 
        </Routes>

      </main>
  
  );
}
