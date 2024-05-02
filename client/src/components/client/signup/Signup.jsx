import React, { useState } from 'react';
import  {useDispatch} from 'react-redux';
import {registerUser} from '../../../redux/features/client/clientSlice'
import { useNavigate } from 'react-router-dom';

import './Signup.css'; 
import Header from '../Header/Header'

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [avatarPreview, setAvatarPreview] = useState(null);
  const [passwordConditions, setPasswordConditions] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false
  });

  const checkPasswordStrength = (password) => {
    setPasswordConditions({
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      symbol: /[!@#$%^&*]/.test(password)
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    // console.log('Avatar:', avatar);

    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }

    // Check if password meets all conditions
    const passwordIsValid = Object.values(passwordConditions).every(Boolean);
    if (!passwordIsValid) {
      alert('Please enter a valid password.');
      return;
    }

    dispatch(registerUser({
      firstName,
      lastName,
      email,
      password,
    })).then((result) => {
      console.log('Dispatch Result:', result); // Access the payload here
      if (result.payload && result.payload.message === 'Signup successful') {
        console.log("working")
        navigate('/login');
      }
    });
  };

  // const handleAvatarChange = (e) => {
  //   const selectedAvatar = e.target.files[0];
  //   setAvatar(selectedAvatar);
  //   if (selectedAvatar) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setAvatarPreview(reader.result);
  //     };
  //     reader.readAsDataURL(selectedAvatar);
  //   } else {
  //     setAvatarPreview(null);
  //   }
  // };

  return (
    <>
      <header className="header">
      <h1 className="header-title">EVENTO</h1>
    </header>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
            />
            <ul className="password-conditions">
              <li className={passwordConditions.length ? 'valid' : ''}>At least 8 characters long</li>
              <li className={passwordConditions.lowercase ? 'valid' : ''}>Includes a lowercase letter</li>
              <li className={passwordConditions.uppercase ? 'valid' : ''}>Includes an uppercase letter</li>
              <li className={passwordConditions.number ? 'valid' : ''}>Includes a number</li>
              <li className={passwordConditions.symbol ? 'valid' : ''}>Includes a symbol (e.g., !@#$%^&*)</li>
            </ul>
          </div>

          {/* <div className="form-group">
            <label htmlFor="avatar">Choose Avatar:</label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
              className="form-control"
            />
            {avatarPreview && (
              <img src={avatarPreview} alt="Avatar Preview" className="avatar-preview" />
            )}
          </div> */}

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
