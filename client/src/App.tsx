import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Landing from './pages/Landing/landing';
import ErrorPage from './pages/errorPage/errorPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
