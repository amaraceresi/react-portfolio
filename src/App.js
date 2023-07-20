import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import AboutMe from './screens/AboutMe/AboutMe';
import Portfolio from './screens/Portfolio/Portfolio';
import Resume from './screens/Resume/Resume';
import Contact from './screens/Contact/Contact';
import Navbar from './screens/Navbar/Navbar';
import Footer from './screens/components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

