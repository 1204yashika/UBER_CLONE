import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const CaptainProtector = ({children}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("token" , token);
  useEffect(()=>{
	if(!token){
		navigate("/captainLogin");
	}
  },[ token, navigate])
  if(!token ){
	return null;
  }
  return (
	<>{children}</>
  )
}

export default CaptainProtector
