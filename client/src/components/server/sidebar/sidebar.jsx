import React from 'react';
import './Sidebar.css'; // Custom CSS file for styling
import Header from '../Header/Header'
const Sidebar = () => {
  return (
    <>
    <Header />
    <div className="sidebar">
      <div className="top-section">
        <h1>Evento</h1>
      </div>
      <div className="middle-section">
        <button className="sidebar-button">Button 1</button>
        <button className="sidebar-button">Button 2</button>
        <button className="sidebar-button">Button 3</button>
      </div>
      <div className="bottom-section">
        <button className="sign-out-button"></button>
      </div>
    </div>
    </>

  );
};

export default Sidebar;
