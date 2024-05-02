// import React,{ useEffect } from 'react'
// import axios from 'axios';
// import Login from './components/client/Login/Login.jsx'
// import Signup from './components/client/signup/Signup';
// import Home from './components/client/Home/Home.jsx'
// import AddEvent from './components/client/AddEvent/EventForm.jsx'
// import ProfileForm from './components/client/ProfileForm/ProfileForm.jsx'
// import AdminLogin from './components/server/Login/AdminLogin.jsx'
// import Sidebar from './components/server/sidebar/sidebar.jsx'
// import Users from './components/server/Users/Users.jsx'
// import UserDetails from './components/server/UserDetails/UserDetails.jsx'


// const App = () => {

//     const dataToSend = {
//         name: "John",
//         age: 30
//     };

//     useEffect(() => {
//         axios.post("http://localhost:4000/admin/sample", dataToSend)
//             .then((res) => {
//                 console.log(res.data);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);

//     useEffect(() =>{
//         axios.get("http://localhost:4000/")
//         .then((res)=>{
//             console.log(res.data)
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     })

//   return (
//     <div>
//         <Signup />
//     </div>
//   )
// }

// export default App
//-------------------------------
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/client/signup/Signup';
import Login from './components/client/Login/Login.jsx';
import Home from './components/client/Home/Home.jsx';
import NotFound from './components/client/notFound/notFound.jsx'
import Profile from './components/client/ProfileForm/ProfileForm.jsx';
import Events from './components/client/AddEvent/EventForm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />     
        <Route path="/events" element={<Events />} />   
        <Route path="/profile" element={<Profile />} />     
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
   
      </Routes>
    </Router>
  );
}

export default App;


