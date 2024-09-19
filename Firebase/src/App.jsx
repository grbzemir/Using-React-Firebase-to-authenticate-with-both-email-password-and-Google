import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase' // Import auth from your Firebase config
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUsers(user)
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])


  return (

    <div>
      <BrowserRouter>
        {users?.accessToken && <Navbar />}
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/dashboard' element={<Home users={users} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />
    </div>

  )
}

export default App
