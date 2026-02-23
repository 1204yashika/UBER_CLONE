import React, { use, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanal from '../components/LocationSearchPanal';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
	console.log("Home");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panalOpen, setPanalOpen] = useState(false);
  const panalRef = useRef(null);
  const panalCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanalOpen] = useState(false);
  const [confirmedRideOpen, setConfirmedRideOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  


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

  useGSAP(()=>{
	gsap.to(vehiclePanelRef.current, {
		transform: vehiclePanelOpen ? "translateY(0%)" : "translateY(100%)",
	})
  }, [vehiclePanelOpen])

  useGSAP(()=>{
	gsap.to(confirmedRideRef.current, {
		transform: confirmedRideOpen ? "translateY(0%)" : "translateY(100%)",
	})
  }, [confirmedRideOpen])

   useGSAP(()=>{
	gsap.to(vehicleFoundRef.current, {
		transform: vehicleFound ? "translateY(0%)" : "translateY(100%)",
	})
  }, [vehicleFound])

  useGSAP(()=>{
	gsap.to(waitingForDriverRef.current, {
		transform: waitingForDriver ? "translateY(0%)" : "translateY(100%)",
	})
  }, [waitingForDriver])
  
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
			<LocationSearchPanal
				vehiclePanelOpen={vehiclePanelOpen}
				setVehiclePanalOpen={setVehiclePanalOpen}
				panalOpen={panalOpen}
				setPanalOpen={setPanalOpen}
			/>
		</div>
		
	  </div>
	  <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 w-full p-3 py-8 pt-14 bg-white translate-y-full vehicle-panel'>
		<VehiclePanel 
			setVehiclePanalOpen={setVehiclePanalOpen}
			vehiclePanelOpen={vehiclePanelOpen}
			setConfirmedRideOpen={setConfirmedRideOpen}
		/>
	  </div>
	  <div ref={confirmedRideRef} className='fixed z-10 bottom-0 w-full p-3 py-6 pt-14 bg-white translate-y-full vehicle-panel'>
		<ConfirmedRide
			setConfirmedRideOpen={setConfirmedRideOpen}
			confirmedRideOpen={confirmedRideOpen}
			setVehicleFound={setVehicleFound}
		/>
	  </div>
	  <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 w-full p-3 py-6 pt-14 bg-white translate-y-full vehicle-panel'>
		<LookingForDriver
			setVehicleFound={setVehicleFound}
		/>
	  </div>
	  <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 w-full p-3 py-6 pt-14 bg-white translate-y-full vehicle-panel'>
		<WaitingForDriver
			setWaitingForDriver={setWaitingForDriver}
		/>
	  </div>
	  
	</div>
  )
}

export default Home
