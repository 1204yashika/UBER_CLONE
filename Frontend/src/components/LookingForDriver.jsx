import React from 'react'

const LookingForDriver = () => {
  return (
	<div>
		<h5 
		className='p-3 w-[93%] text-center absolute top-0 '
		onClick={()=>{
			setVehicleFound(false);
		}}
		>
			<i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
		</h5>
		<h3 className='text-2xl font-semibold mb-5'>Looking For a Driver</h3>
		<div className='flex justify-between items-center w-full flex-col gap-2 '>
		  <img className="h-50" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"/>
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
		</div>

	</div>
  )
}

export default LookingForDriver
