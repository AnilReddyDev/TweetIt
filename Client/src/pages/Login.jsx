import axios from 'axios';
import React, {  useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  async function loginUser(ev){
    ev.preventDefault();
    try {
      const response = await axios.post("/api/user/login",{
        email,
        password
      })
      alert("login sucessfull");
      navigate("/")
    } catch (error) {
      console.log("Login failed! try again later")
    }
  }
  return (
    <div className='flex flex-col h-screen items-center bg-black justify-center'>
      <div className='bg-gray-400 py-8 rounded-md'>
      <h1 className='text-4xl text-center my-6'>Login</h1>
      <form className='mx-auto flex items-center flex-col gap-5' onSubmit={loginUser}>
        <input type="email" name="email" 
          className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-black rounded-sm placeholder:text-black'
        placeholder='your@email.com'
        value={email}
        onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" 
          className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-black rounded-sm placeholder:text-black'
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)} />
        <button className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Login</button>
        <div className='text-center py-2 text-black'>
          Don't have account yet ? &#32;
          <Link to={"/register"} className=' text-red-600 underline'>
              Register Now
          </Link>
        </div>
      </form>
      </div>
    </div>
  )
}