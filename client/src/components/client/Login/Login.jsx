import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/features/client/clientSlice'; // Import login action
import './Login.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector((state) => state.client); // Access state from Redux
  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
   
      const result = await dispatch(loginUser({ email, password })); // Dispatch login action

      if (result.type === 'client/loginUser/fulfilled') {
        console.log('Login successful!');
        navigate('/home')
        // Navigate to the desired page after successful login
        // (e.g., using react-router-dom's useNavigate hook)
      } else if (result.type === 'client/loginUser/rejected') {
        console.error('Login error:', result.payload);
        // Display an alert with the specific error message
        alert(result.payload.message); // Handle the error message from the action
      }

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
              {status === 'loading' ? 'Logging in...' : 'Submit'}
            </button>
            <button type="button" className="secondary-button">
              <a className="angor" href="/signup">
                Signup
              </a>
            </button>
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
        </form>
      </div>
    </>
  );
};

export default Login;