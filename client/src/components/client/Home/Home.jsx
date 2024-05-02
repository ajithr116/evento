
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './Home.css';
import { MdDescription, MdLocationOn, MdDateRange, MdAccessTime, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  
  useEffect(() => {
    // Dummy data for demonstration
    const dummyEvents = [
      {
        _id: '1',
        title: 'Event 1',
        description: 'Description of Event 1',
        location: 'Location 1',
        date: '2024-05-01',
        time: '10:00 AM',
        createdBy: 'User 1'
      },
      {
        _id: '2',
        title: 'Event 2',
        description: 'Description of Event 2',
        location: 'Location 2',
        date: '2024-05-02',
        time: '11:00 AM',
        createdBy: 'User 2'
      },
      {
        _id: '3',
        title: 'Event 3',
        description: 'Description of Event 3',
        location: 'Location 3',
        date: '2024-05-03',
        time: '12:00 PM',
        createdBy: 'User 3'
      }
    ];

    // Set dummy events to state
    setEvents(dummyEvents);

    // If you want to fetch real data from the backend, you can use axios here
    // axios.get('/api/events')
    //   .then(response => {
    //     setEvents(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching events:', error);
    //   });
  }, []);

  const handleEdit = (eventId) => {
    // Add your edit logic here
    console.log(`Editing event with ID: ${eventId}`);
  };

  const handleDelete = (eventId) => {
    // Add your delete logic here
    console.log(`Deleting event with ID: ${eventId}`);
  };

  return (
    <div>
      <Header />
      <br/>
      <div className="event-list">
        {events.map(event => (
          <div key={event._id} className="event-card">
            <h2>{event.title}</h2>
            <p className="Description"><MdDescription color="#007bff" /> Description: {event.description}</p>
            <p className="Location"><MdLocationOn color="#007bff" /> Location: {event.location}</p>
            <p className="Date"><MdDateRange color="#007bff" /> Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="Time"><MdAccessTime color="#007bff" /> Time: {event.time}</p>
            <p className="Created"><MdPerson color="#007bff" /> Created By: {event.createdBy}</p>
            <div className="button-container">
              <button onClick={() => handleEdit(event._id)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(event._id)} className="Status-button">Status</button>
              <button onClick={() => handleDelete(event._id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
