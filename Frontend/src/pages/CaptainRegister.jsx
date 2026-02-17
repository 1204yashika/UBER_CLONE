import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setCaptain } from '../store/captainSlice';
import axios from 'axios';

const CaptainRegister = () => {
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [vehicleColor, setVehicleColor] = React.useState("");
	const [vehiclePlate, setVehiclePlate] = React.useState("");
	const [vehicleCapacity, setVehicleCapacity] = React.useState("");
	const [vehicleType, setVehicleType] = React.useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
  const handleSignup = async(e)=>{
	e.preventDefault();
	const newCaptain = {
	    fullname: {
			firstName,
			lastName
		},
		email,
		password,
		vehicle: {
			color: vehicleColor,
			plate: vehiclePlate,
			vehicleType: vehicleType,
			capacity: vehicleCapacity
		}
	}
	console.log("newCaptain", newCaptain);
	const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, newCaptain)
	console.log("response", response);
	if(response.status === 201){
		const data = response.data;
		dispatch(setCaptain(data.captain));
		localStorage.setItem("token", data.token);
		navigate("/home")
	}
  }
  return (
	<div className='p-7 flex flex-col justify-between h-screen'>
		<div> 
			<form onSubmit={handleSignup} className='flex flex-col'>
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
			<h1 className='text-xl mb-2'>Vehicle Information</h1>
			<div className='flex gap-4'>
				<input 
				className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
				type="text" 
				placeholder='Vehicle color' 
				value={vehicleColor}
				onChange={(e) => setVehicleColor(e.target.value)}
				required/>
				<input 
				className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
				type="text" 
				placeholder='Vehicle plate' 
				value={vehiclePlate}
				onChange={(e) => setVehiclePlate(e.target.value)}
				required/>
			</div>
			<div className='flex gap-4'>
				<select 
				className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg" 
				value={vehicleType}
				onChange={(e) => setVehicleType(e.target.value)}
				required>
					<option value="">Select vehicle type</option>
					<option value="car">Car</option>
					<option value="motorcycle">Motorcycle</option>
					<option value="auto">Auto</option>
				</select>
				<input 
				className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
				type="number" 
				placeholder='Vehicle capacity' 
				value={vehicleCapacity}
				onChange={(e) => setVehicleCapacity(e.target.value)}
				required/>
			</div>
			<button 
			className='flex items-center justify-center w-full bg-black text-white py-4 rounded mt-4'
			>Signup
			</button>
			<div className='mt-4'>
				<p>Already have a account? <Link to="/captainlogin" className='text-blue-500 underline'>Sign in as a captain</Link></p>
			</div>
			</form>
		</div>
	  
	</div>
  )
}

export default CaptainRegister
