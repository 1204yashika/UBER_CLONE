import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
	<div className='h-screen'>
	  <Link  to="/home" className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2'>
		<i className="ri-home-4-line text-lg font-medium"></i>
	  </Link>
	  <div className='h-1/2'>
		<img className="w-full h-full object-cover" src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png"/>
	  </div>
	  <div className='h-1/2 bg-white p-4'>
	  	<div className='flex items-center justify-between'>
			<img className="h-24" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"/>
			<div className='text-right'>
				<h2 className='text-lg font-medium'>Yashika</h2>
				<h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AP 1234</h4>
				<p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
			</div>
		</div>
		<div className='flex justify-between items-center w-full flex-col gap-2 '>
		  <div className='w-full mt-5'>
			<div className='flex items-center gap-5 p-2 border-b-2 border-gray-200'>
				<i className="text-lg ri-map-pin-user-fill"></i>
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
		</div>
		<button className='w-full mt-5 bg-green-600 font-semibold text-white p-2 rounded-lg'>Make a Payment</button>
	  </div>
	</div>
  )
}

export default Riding
