import React, { useState } from 'react';
import './Signup.css'; // Custom CSS file for styling

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here, such as sending the data to your backend
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Avatar:', avatar);
  };

  const handleAvatarChange = (e) => {
    const selectedAvatar = e.target.files[0];
    setAvatar(selectedAvatar);
    if (selectedAvatar) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(selectedAvatar);
    } else {
      setAvatarPreview(null);
    }
  };

  return (
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
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
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
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
