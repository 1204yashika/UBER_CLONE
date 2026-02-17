import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeUser} from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("logout token", token);

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
	headers: {
	  Authorization: `Bearer ${token}`,
	},
  }).then((response)=>{
	console.log("response", response);
	if(response.status === 200){
	  dispatch(removeUser());
	  localStorage.removeItem("token");
	  navigate("/login");
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

export default UserLogout
