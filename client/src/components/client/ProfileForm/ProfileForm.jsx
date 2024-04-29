import React, { useState } from 'react';
import Header from '../Header/Header.jsx'
import './ProfileForm.css'

const ProfileUpload = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here, e.g., send data to server
  };

  return (
    <div>
    <Header />
      <h2>Profile Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="avatar">Profile Picture:</label>
          <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={handleAgeChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileUpload;
