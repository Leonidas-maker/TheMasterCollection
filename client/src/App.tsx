import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Landing from './pages/landing/landing';
import ErrorPage from './pages/errorPage/errorPage';
import Imprint from './pages/imprint/imprint';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Credits from './pages/credits/credits';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
