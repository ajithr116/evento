import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../redux/features/client/clientLogout'; 
import axios from 'axios';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSignOut = async () => {
    console.log("reached 1 " + token);
    const token = localStorage.getItem('token'); 
    console.log("reached 2 " + token);
    try {
      console.log("reached 3 " + token);
      await axios.post('http://localhost:4000/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("reached 4 " + token);
      localStorage.removeItem('token'); // Clear the JWT from local storage
      dispatch(logoutUser()); // Dispatch logout action to update Redux state
      console.log("reached 5 " + token);
      navigate('/login'); // Navigate to login page
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <div className="header">
      <h1 className="header-title">EVENTO</h1>
      <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
    </div>
  );
};

export default Header;
