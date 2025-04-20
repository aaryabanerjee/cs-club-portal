import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigitalRain from './components/DigitalRain'; // Import DigitalRain
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home';
import Projects from './pages/Projects';
import SubmitProject from './pages/SubmitProject';
import HallOfFame from './pages/HallOfFame';
import Resources from './pages/Resources';
import './App.css';

function App() {
  return (
    <Router>
      <div className="matrix-container">
        <Navbar />
        <DigitalRain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/submit-project" element={<SubmitProject />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;