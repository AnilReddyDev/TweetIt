import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
axios.defaults.baseURL = "http://192.168.0.109:3000";
axios.defaults.withCredentials = true;
export default function App() {
  return (
   <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

   </BrowserRouter>
  )
}
