import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {removeCaptain} from '../store/captainSlice'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("logout token", token);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
	headers: {
	  Authorization: `Bearer ${token}`,
	},
  }).then((response)=>{
	console.log("response", response);
	if(response.status === 200){
	  dispatch(removeCaptain());
	  localStorage.removeItem("token");
	  navigate("/captainLogin");
	}
  }).catch((error)=>{
	console.error("Logout error", error);
  })
	  
  return (
	<div>
	  Logout
	</div>
  )
}

export default CaptainLogout
