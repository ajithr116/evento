import React from 'react';
import './Header.css'; // Custom CSS file for styling

const Header = ({ onSignOut }) => {
  return (
    <div className="header">
      <h1 className="header-title">EVENTO</h1>
      <button onClick={onSignOut} className="sign-out-button">Sign Out</button>
    </div>
  );
};

export default Header;
