import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Login from './components/client/Login/Login.jsx'
// import Signup from './components/client/signup/Signup.jsx'
// import Home from './components/client/Home/Home.jsx'
// import AddEvent from './components/client/AddEvent/EventForm.jsx'
// import ProfileForm from './components/client/ProfileForm/ProfileForm.jsx'
// import AdminLogin from './components/server/Login/AdminLogin.jsx'
// import Sidebar from './components/server/sidebar/sidebar.jsx'
import Users from './components/server/Users/Users.jsx'
// import UserDetails from './components/server/UserDetails/UserDetails.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
)
