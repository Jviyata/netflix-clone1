import React from 'react';
import './Header.css';

function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="header">
      <h1 className="logo">NETFLIX</h1>
      
      <nav className="nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">TV Shows</a>
        <a href="#" className="nav-link">Movies</a>
        <a href="#" className="nav-link">My List</a>
      </nav>
      
      <div className="right-section">
        <div className="search-wrap">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path 
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
              stroke="#999" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm || ''}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="profile-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="4" fill="#e50914"/>
            <path 
              d="M16 8C13.79 8 12 9.79 12 12C12 14.21 13.79 16 16 16C18.21 16 20 14.21 20 12C20 9.79 18.21 8 16 8ZM16 18C12.67 18 6 19.67 6 23V24C6 24.55 6.45 25 7 25H25C25.55 25 26 24.55 26 24V23C26 19.67 19.33 18 16 18Z" 
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;