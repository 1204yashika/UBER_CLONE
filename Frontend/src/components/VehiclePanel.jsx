import React from 'react'

const VehiclePanel = ({setVehiclePanalOpen, vehiclePanelOpen, setConfirmedRideOpen}) => {
  return (
	<div>
	  <h5 
		className='p-3 w-[93%] text-center absolute top-0 '
		onClick={()=>{
			setVehiclePanalOpen(false);
		}}
		>
			<i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
		</h5>
		<h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
		<div className='flex items-center justify-between w-full px-3 bg-gray-100 active:border-black rounded-xl mb-3'
			onClick={()=>{
				setConfirmedRideOpen(true);
			}}
		>
			<img className="h-30" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="Uber Top Bar" />
			<div className='ml-2 w-1/2'>
				<h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
				<h5 className='font-medium text-sm'>2 mins away</h5>
				<p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
			</div>
			<h2 className='text-lg font-semibold'>193.20</h2>
		</div>
		<div className='flex items-center justify-between w-full px-3 bg-gray-100 active:border-black rounded-xl mb-3'
			onClick={()=>{
				setConfirmedRideOpen(true);
			}}
		>
			<img className="h-30" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png" alt="Uber Top Bar" />
			<div className='ml-2 w-1/2'>
				<h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
				<h5 className='font-medium text-sm'>3 mins away</h5>
				<p className='font-medium text-xs text-gray-600'>Affordable, motorcycle rides</p>
			</div>
			<h2 className='text-lg font-semibold'>65.90</h2>
		</div>
		<div className='flex items-center justify-between w-full px-3 bg-gray-100 active:border-black rounded-xl mb-3'
			onClick={()=>{
				setConfirmedRideOpen(true);
			}}
		>
			<img className="h-30" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png" alt="Uber Top Bar" />
			<div className='ml-2 w-1/2'>
				<h4 className='font-medium text-base'>Uber Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
				<h5 className='font-medium text-sm'>2 mins away</h5>
				<p className='font-medium text-xs text-gray-600'>Affordable, auto rides</p>
			</div>
			<h2 className='text-lg font-semibold'>118.68</h2>
		</div>
	</div>
  )
}

export default VehiclePanel
