import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopup, setConfirmRidePopup] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupRef = useRef(null);

  useGSAP(()=>{
	gsap.to(ridePopupPanelRef.current, {
		transform: ridePopupPanel ? "translateY(0%)" : "translateY(100%)",
	})
  }, [ridePopupPanel])
  useGSAP(()=>{
	gsap.to(confirmRidePopupRef.current, {
		transform: confirmRidePopup ? "translateY(0%)" : "translateY(100%)",
	})
  }, [confirmRidePopup])
  return (
	<div className='h-screen'>
	  <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
		<img className="w-32 h-12 object-contain" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"/>
		<Link  to="/home" className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
			<i className="ri-logout-box-line text-lg font-medium"></i>
		</Link>
	  </div>
	  <div className='h-3/5'>
		<img className="w-full h-full object-cover" src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png"/>
	  </div>
	  <div className='h-2/5 p-6'>
		<CaptainDetails/>
	  </div>
	  <div ref={ridePopupPanelRef} className='fixed z-10 bottom-0 w-full p-3 py-6 pt-14 bg-white translate-y-full'>
		<RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopup={setConfirmRidePopup}/>
	  </div>
	  <div ref={confirmRidePopupRef} className='fixed h-screen z-10 bottom-0 w-full p-3 py-6 pt-14 bg-white translate-y-full'>
		<ConfirmRidePopup setConfirmRidePopup={setConfirmRidePopup} />
	  </div>
	</div>
  )
}

export default CaptainHome
