import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanal from '../components/LocationSearchPanal';


const Home = () => {
	console.log("Home");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panalOpen, setPanalOpen] = useState(false);
  const panalRef = useRef(null);
  const panalCloseRef = useRef(null);


  const submitHandler = (e)=>{
	e.preventDefault();
  }

  useGSAP(()=>{
	gsap.to(panalRef.current, {
		height: panalOpen ? "70%" : "0%",
		opacity: panalOpen ? 1 : 0,
		paddingLeft: panalOpen ? "1.5rem" : "0rem",
		paddingRight: panalOpen ? "1.5rem" : "0rem",
	})
	gsap.to(panalCloseRef.current, {
		opacity: panalOpen ? 1 : 0
	})
  }, [panalOpen])
  return (
	<div className='h-screen relative overflow-hidden'>
	  <img className="w-25 absolute left-5 top-5" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="Uber Logo"  />
	  <div className="h-screen w-screen">
		<img className="w-full h-full object-cover" src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png"/>
	  </div>
	  <div className=' absolute top-0 w-full h-screen flex flex-col justify-end'>
		<div className='h-[30%] p-6 bg-white relative'>
			<h5 className='absolute right-6 top-6 text-2xl opacity-0 cursor-pointer' 
			onClick={()=>setPanalOpen(false)}
			ref={panalCloseRef}
			>
				<i className="ri-arrow-down-wide-line"></i>
			</h5>
			<h4 className='text-2xl font-semibold'>Find a trip</h4>
			<form onSubmit={submitHandler}>
				<div className="line absolute h-18 w-1 top-[32%] left-8 bg-gray-700 rounded-full"></div>
				<input 
				className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-4'
				type="text" 
				placeholder='Add a pickup location'
				value={pickup}
				onChange={(e)=>setPickup(e.target.value)}
				onClick={()=>setPanalOpen(true)}
				/>
				<input 
				className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg mt-4 w-full' 
				type="text" 
				placeholder='Enter your destination'
				value={destination}
				onChange={(e)=>setDestination(e.target.value)}
				onClick={()=>setPanalOpen(true)}
				/>
			</form>
		</div>
		<div ref={panalRef} className='h-0 bg-white'>
			<LocationSearchPanal/>
		</div>
		
	  </div>
	  <div className='fixed z-10 bottom-0 w-full p-3 py-8 bg-white translate-y-full '>
		<h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
		<div className='flex items-center justify-between w-full px-3 bg-gray-100 active:border-black rounded-xl mb-3'>
			<img className="h-30" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="Uber Top Bar" />
			<div className='ml-2 w-1/2'>
				<h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
				<h5 className='font-medium text-sm'>2 mins away</h5>
				<p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
			</div>
			<h2 className='text-lg font-semibold'>193.20</h2>
		</div>
		<div className='flex items-center justify-between w-full px-3 bg-gray-100 active:border-black rounded-xl mb-3'>
			<img className="h-30" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png" alt="Uber Top Bar" />
			<div className='ml-2 w-1/2'>
				<h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
				<h5 className='font-medium text-sm'>3 mins away</h5>
				<p className='font-medium text-xs text-gray-600'>Affordable, motorcycle rides</p>
			</div>
			<h2 className='text-lg font-semibold'>65.90</h2>
		</div>
		<div className='flex items-center justify-between w-full px-3 bg-gray-100 active:border-black rounded-xl mb-3'>
			<img className="h-30" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png" alt="Uber Top Bar" />
			<div className='ml-2 w-1/2'>
				<h4 className='font-medium text-base'>Uber Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
				<h5 className='font-medium text-sm'>2 mins away</h5>
				<p className='font-medium text-xs text-gray-600'>Affordable, auto rides</p>
			</div>
			<h2 className='text-lg font-semibold'>118.68</h2>
		</div>
	  </div>
	  
	</div>
  )
}

export default Home
