import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = ({setConfirmRidePopup}) => {
  return (
	<div>
		<h5 
		className='p-3 w-[93%] text-center absolute top-0 '
		onClick={()=>{
			setConfirmRidePopup(false);
		}}
		>
			<i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
		</h5>
		<h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
		<div className='flex items-center justify-between mt-4 p-2 bg-yellow-400 rounded-lg'>
			<div className='flex items-center gap-3'>
				<img  className="h-10 w-10 rounded-full object-cover" src="https://e7.pngegg.com/pngimages/89/139/png-clipart-woman-random-buttons-face-people.png" alt="" />
				<div className='text-lg font-medium'>Yashika </div>
			</div>
			<h5 className='text-lg font-semibold'>2.2 km</h5>
		</div>
		
		<div className='flex justify-between items-center w-full flex-col gap-2 '>
		  <div className='w-full mt-5'>
			<div className='flex items-center gap-5 p-2 border-b-2 border-gray-200'>
				<i className="text-lg ri-map-pin-line"></i>
				<div>
					<h3 className='text-lg font-medium'>563/11-A</h3>
					<p className='text-base text-gray-600 -mt-1'>ajoweifjaw ke fwoie</p>
				</div>
			</div>
			<div className='flex items-center gap-5 p-2 border-b-2 border-gray-200'>
				<i class="text-lg ri-map-pin-user-fill"></i>
				<div>
					<h3 className='text-lg font-medium'>563/11-A</h3>
					<p className='text-base text-gray-600 -mt-1'>ajoweifjaw ke fwoie</p>
				</div>
			</div>
			<div className='flex items-center gap-5 p-2'>
				<i class="text-lg ri-wallet-line"></i>
				<div>
					<h3 className='text-lg font-medium'>193.20</h3>
					<p className='text-base text-gray-600 -mt-1'>cash</p>
				</div>
			</div>
		  </div>
		  <Link 
		  to="/captain-riding"
		  className='w-full flex justify-center mt-5 bg-green-600 font-semibold text-white p-3 rounded-lg'
		  >Confirm</Link>
		  <button 
		  className='w-full mt-1 bg-red-500 font-semibold text-white p-3 rounded-lg'
		  onClick={()=>{
			setConfirmRidePopup(false);
		  }}
		  >Cancel</button>
		</div>

	</div>
  )
}

export default ConfirmRidePopup
