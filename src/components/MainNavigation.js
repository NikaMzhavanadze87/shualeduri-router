import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import axios from 'axios';

function MainNavigation({ onSetSearchResults  })  {
  const location = useLocation();
  const navigate = useNavigate();
  const isProductsPage = location.pathname === '/products';
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('https://api2.mymarket.ge/api/ka/products', {
        Keyword: searchInput,
        Limit: 12,
      });
  
      const searchResults = response.data.data.Prs;
      console.log(searchResults);
      
      onSetSearchResults(searchResults);
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <header className={classes.header}>
      <h1>Mymarket</h1>
      {isProductsPage && (
        <div className={classes.search}>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}end>
              Home
            </NavLink>
          </li>
          <li>
          {isProductsPage ? (
              <button onClick={handleLogout} className={classes['logout-button']}>Logout</button>
            ) : (
              <NavLink to="/login" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                Log In
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;