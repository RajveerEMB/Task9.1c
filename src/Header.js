import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Authentication';
import './Header.css';

function Headers() {
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <header>
      <h1 className="bar">DEV@Deakin</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
        {currentUser ? (
          <button onClick={handleLogout} className="log">Sign Out</button> // Show Sign Out if logged in
        ) : (
          <Link className="log" to="/login">Log In</Link> // Show Log In if not logged in
        )}
      </div>
    </header>
  );
}

export default Headers;
