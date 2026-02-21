import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setUser } from '../store/userSlice';
import axios from 'axios';

const UserProtector = ({children}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
	  if(!token){
		  navigate("/login");
	  }
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    }).then((response)=>{
      if(response.status === 200){
        dispatch(setUser(response.data.user));
        setIsLoading(false);
      }
    }).catch((error)=>{
      localStorage.removeItem("token");
      navigate("/login");
    }).finally(()=>{
      setIsLoading(false);
    });
  },[ token, navigate])
  if(!token ){
	return null;
  }
  return (
	<>{children}</>
  )
}

export default UserProtector
