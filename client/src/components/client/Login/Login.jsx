import React, { useState } from 'react';
import './Login.css'; // Custom CSS file for styling
import Header from '../Header/Header'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the data to your backend
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <header className="header">
        <h1 className="header-title">EVENTO</h1>
      </header>
      <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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

        <div className="button-container">
          <button type="submit" className="login-button">
            Submit
          </button>
          <button type="button" className="secondary-button">
            Signup
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
