import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setCaptain } from '../store/captainSlice';
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async(e)=>{
	e.preventDefault();
	const newCaptain = {
		email,
		password,
	}
	console.log("newCaptain", newCaptain);
	const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, newCaptain)
	console.log("response", response);
	if(response.status === 200){
		const data = response.data;
		dispatch(setCaptain(data.captain));
		localStorage.setItem("token", data.token);
		navigate("/captainHome")
	}
  }
  return (
	<div className='p-7 flex flex-col justify-between h-screen'>
		<div> 
			<form onSubmit={handleLogin} className='flex flex-col'>
			<h1 className='text-xl mb-2'>What's your email?</h1>
			<input 
			className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
			type="email" 
			placeholder='email@example.com' 
			value={email}
			onChange= {(e) => setEmail(e.target.value)}
			required/>
			<h1 className='text-xl mb-2'>Enter Password</h1>
			<input 
			className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
			type="password" 
			placeholder='********' 
			value={password}
			onChange={(e)=>{setPassword(e.target.value)}}
			required/>
			<button 
			className='flex items-center justify-center w-full bg-black text-white py-4 rounded mt-4'
			>Login
			</button>
			<div className='mt-4'>
				<p>Join a fleet? <Link to="/captainsignup" className='text-blue-500 underline'>Register as a captain</Link></p>
			</div>
			</form>
		</div>
		<div>
			<Link to="/login" className='flex items-center justify-center w-full bg-[#cacd13] text-white py-4 rounded mt-4'>Sign in as user</Link>
		</div>
	  
	</div>
  )
}

export default CaptainLogin
