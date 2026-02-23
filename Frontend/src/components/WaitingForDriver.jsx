import React from 'react'

const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
	<div>
		<h5 
		className='p-3 w-[93%] text-center absolute top-0 '
		onClick={()=>{
			setWaitingForDriver(false);
		}}
		>
			<i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
		</h5>
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

export default WaitingForDriver
