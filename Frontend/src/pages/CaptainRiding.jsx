import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
	<div className='h-screen'>
	  <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
		<img className="w-32 h-12 object-contain" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"/>
		<Link  to="/home" className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
			<i className="ri-logout-box-line text-lg font-medium"></i>
		</Link>
	  </div>
	  <div className='h-4/5'>
		<img className="w-full h-full object-cover" src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png"/>
	  </div>
	  <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-center relative'>
	  	<h5 
			className='p-3 w-[95%] text-center absolute top-0 '
		>
			<i className="text-3xl text-gray-200 ri-arrow-up-wide-line"></i>
		</h5>
		<h4 className='text-xl font-semibold'>4 KM Away</h4>
		<button 
			className='w-full mt-5 bg-green-600 font-semibold text-white p-3 px-8 rounded-lg'
		>Complete Ride</button>
	  </div>
	</div>
  )
}

export default CaptainRiding
