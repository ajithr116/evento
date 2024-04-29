// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">EVENTO</h1>
      <div className="header-buttons">
        <button className="add-event-button">Add Event</button>
        <button className="add-profile-button">Add Profile</button>
        <button className="signout-button">Sign out</button>
      </div>
    </header>
  );
};

export default Header;
