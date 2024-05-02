// Header.jsx
import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logoutUser} from '../../../redux/features/client/clientLogout';
import axios from 'axios';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSignOut = async ()=>{
    const token = localStorage.getItem('token');
    try{
      await axios.post('http://localhost:4000/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.removeItem('token'); 
      dispatch(logoutUser());       
      navigate('/login')
    }
    catch(err){
      console.error("logout error", err);
    }
  }

  const handleProfileRoute= ()=>{
    navigate('/profile')
  }

  const handleEventRoute= ()=>{
    navigate('/events')
  }

  return (
    <header className="header">
      <h1 className="header-title">EVENTO</h1>
      <div className="header-buttons">
        <button onClick={handleEventRoute} className="add-event-button">Add Event</button>
        <button onClick={handleProfileRoute} className="add-profile-button">Add Profile</button>
        <button onClick={handleSignOut} className="signout-button">Sign out</button>
      </div>
    </header>
  );
};

export default Header;
