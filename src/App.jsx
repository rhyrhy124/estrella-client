import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/articles" element={<ArticlePage />} />
    </Routes>
  );
};

export default App;