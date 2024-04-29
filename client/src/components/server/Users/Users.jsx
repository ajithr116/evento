import {useState} from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../Header/Header'
import './Users.css'; // Import the CSS

const UsersTable = () => {
  // This is dummy data. Replace it with actual data in your application.
  const [isFocused, setIsFocused] = useState(false);

  const users = [
    {
      uniqueID: 'abc123',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      profileImage: 'https://via.placeholder.com/150',
    },
    {
      uniqueID: 'def456',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      profileImage: 'https://via.placeholder.com/150',
    },
    // Add more users as needed
  ];

  return (
    <>
      <Sidebar />
      <div className="main-container">
      <div className="user-details-header">
          <h2>User Details</h2>
          <input
            type="text"
            placeholder="Search users..."
            
            
            
            
            className={`search-input ${isFocused ? 'focused' : ''}`}
          />
        </div>
        <table className="user-table">
            <thead>
                <tr>
                <th>Unique ID</th>
                <th>Profile Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Events</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                <tr key={user.uniqueID}>
                    <td>{user.uniqueID}</td>
                    <td><img src={user.profileImage} alt="Profile" /></td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.lastName}</td>
                    <td>
                        <div className="action-buttons">
                            <button>More Details</button>
                            <button>Block</button>
                            <button>Delete</button>
                        </div>
                        </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
