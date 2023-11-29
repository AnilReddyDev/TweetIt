import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [userimg, setUserImg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  async function registerUser(ev){
    ev.preventDefault();
    try {
     await axios.post("/api/user/signup",{
        username,
        email,
        password,
        userimg
      });
      navigate("/login");
    } catch (error) { 
      console.log("Registration failed. Try again !")
    }
  }
  useEffect(() => {
    const cookieExists = (name) => {
      return document.cookie.split(';').some((cookie) => {
        return cookie.trim().startsWith(`${name}=`);
      });
    };

    const isTokenAvailable = cookieExists('token');
    
    if (isTokenAvailable) {
      navigate('/home')
    } 
  }, [])
  
  return (
    <div className='flex flex-col h-screen items-center bg-black justify-center'>
      <div className=' bg-gray-400 py-5 rounded-md '>
        <h1 className='text-4xl text-center my-4'>Registor</h1>
        <form className=' mx-auto flex items-center flex-col gap-4' onSubmit={registerUser}>
          <input type="text" name="username" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-black rounded-sm placeholder:text-black'
            placeholder='Name'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input type="text" name="UserImg" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-black rounded-sm placeholder:text-black'
            placeholder='Paste Image Url'
            value={userimg}
            onChange={e => setUserImg(e.target.value)}
          />
          <input type="email" name="email" placeholder='your@email.com'
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-black rounded-sm placeholder:text-black'
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <input type="password" name="password"
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-black rounded-sm placeholder:text-black'
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <button className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Register</button>
          <div className='text-center py-2 text-black'>
            Already a member ? &#32;
            <Link to={"/"} className='text-red-600 underline'>
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}