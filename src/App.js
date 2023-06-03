import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MainNavigation from './components/MainNavigation';

function App() {
  const [searchResults, setSearchResults] = useState([]); 
  const handleSetSearchResults = (results) => {
    setSearchResults(results);
  };
  return (
    <BrowserRouter>
      <MainNavigation onSetSearchResults={handleSetSearchResults} /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage searchResults={searchResults} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
