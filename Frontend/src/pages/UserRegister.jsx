import React from 'react'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userSlice';

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async(e)=>{
	e.preventDefault();
	const newUser = {
		fullname: {
			firstName,
			lastName
		},
		email,
		password
	}
	console.log("newUser", newUser);
	console.log("VITE_BASE_URL", import.meta.env.VITE_BASE_URL);
	const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
	console.log("response", response);
	if(response.status === 201){
		const data = response.data;
		dispatch(setUser(data.user));
		localStorage.setItem("token", data.token);
		navigate("/home")
	}
  }

  return (
	<div className='p-7 flex flex-col justify-between h-screen'>
		<div> 
			<form onSubmit={(e)=>e.preventDefault()} className='flex flex-col'>
			<h1 className='text-xl mb-2'>What's your name?</h1>
			<div className='flex gap-4'>
				<input 
				className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
				type="text" 
				placeholder='First name' 
				value={firstName}
				onChange= {(e) => setFirstName(e.target.value)}
				required/>
				<input 
				className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
				type="text" 
				placeholder='Last name' 
				value={lastName}
				onChange= {(e) => setLastName(e.target.value)}/>
			</div>
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
			onClick={handleSignup}
			>Signup
			</button>
			<div className='mt-4'>
				<p>Already have a account? <Link to="/login" className='text-blue-500 underline'>Sign in as a user</Link></p>
			</div>
			</form>
		</div>
	  
	</div>
  )
}

export default UserRegister
