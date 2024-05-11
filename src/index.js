import React from 'react';
import ReactDOM from 'react-dom/client'; // Using ReactDOM.createRoot for React 18
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Tampilan from './layouts/utama';
import Search from './layouts/search';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Tampilan />} />
        <Route path="/cars" element={<Search />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
