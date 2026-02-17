import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const UserProtector = ({children}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("token" , token);
  useEffect(()=>{
	if(!token){
		navigate("/login");
	}
  },[ token, navigate])
  if(!token ){
	return null;
  }
  return (
	<>{children}</>
  )
}

export default UserProtector
