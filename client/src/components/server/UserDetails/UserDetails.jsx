// UserDetails.jsx
import React from 'react';
import './UserDetails.css'; // Import the CSS
import Sidebar from '../sidebar/sidebar';

const UserDetails = () => {

    const user = [
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
        
      ];
      const events = [
        {
          uniqueID: 'xyz789',
          title: 'Event 1',
          description: 'This is a description of Event 1.',
          location: 'Location 1',
          date: new Date(),
          time: '10:00 AM',
          createdBy: 'abc123',
          status: [new Date()],
        },
        // Add more events as needed
      ];
    

      return (
        <>
        <Sidebar />
        <div className="main-container">
          {user.map(user => (
            <div key={user.uniqueID} className="user-details">
              <div className="profile-section">
                <img src={user.profileImage} alt="Profile" className="profile-image" />
                <div className="user-info">
                  <h2>{user.firstName} {user.lastName}</h2>
                  <p>Email: {user.email}</p>
                  <p>Unique ID: {user.uniqueID}</p>
                  {/* Add other user details here */}
                </div>
                <div className="user-actions">
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>Block</button>
                </div>
              </div>
              <div className="user-events">
                <h3>Events</h3>
                {events.map(event => (
                  <div key={event.uniqueID}>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <p>{event.description}</p>
                    {/* Add other event details here */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
      );
    };

export default UserDetails;
