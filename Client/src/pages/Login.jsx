import axios from 'axios';
import React, {  useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  async function loginUser(ev){
    ev.preventDefault();
    try {
      const response = await axios.post("/api/user/login",{
        email,
        password
      })
      navigate("/home")
    } catch (error) {
      console.log("Login failed! try again later")
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
      <div className='bg-gray-800 w-11/12 text-white sm:w-auto py-8 rounded-md'>
      <h1 className='text-4xl text-center my-6'>Login</h1>
      <form className='mx-auto flex items-center flex-col gap-3 sm:gap-5' onSubmit={loginUser}>
        <input type="email" name="email" 
          className=' sm:w-96 h-14 outline-none mx-9 text-xl px-3 bg-gray-300 text-black rounded-sm placeholder:text-gray-700'
        placeholder='your@email.com'
        value={email}
        onChange={e => setEmail(e.target.value)} />
        
        <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          className=' sm:w-96 h-14 outline-none mx-9 text-xl px-3 bg-gray-300 text-black rounded-sm placeholder:text-gray-700'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ? (
          <FaEyeSlash className='absolute w-7 h-7 right-12 top-3 text-black' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
        ) : (
          <FaEye className='absolute w-7 h-7 right-12 top-3 text-black' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
        )}
      </div>
        <button className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Login</button>
        <div className='text-center py-2 text-white'>
          Don't have account yet ? &#32;
          <Link to={"/signup"} className=' text-red-600 underline'>
              Register Now
          </Link>
        </div>
      </form>
      </div>
    </div>
  )
}