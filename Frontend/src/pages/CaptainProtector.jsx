import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setCaptain } from '../store/captainSlice';

const CaptainProtector = ({children}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
	if(!token){
		navigate("/captainLogin");
	}
	axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
	headers: {
	  Authorization: `Bearer ${token}`,
	},
	}).then((response)=>{
		if(response.status === 200){
			dispatch(setCaptain(response.data.captain));
			setIsLoading(false);
		}
	}).catch((error)=>{
		localStorage.removeItem("token");
		navigate("/captainLogin");
	}).finally(()=>{
		setIsLoading(false);
	});
  },[ token])

  
  if(isLoading){
	return <div>Loading...</div>;
  }
  if(!token ){
	return null;
  }
  return (
	<>{children}</>
  )
}

export default CaptainProtector
