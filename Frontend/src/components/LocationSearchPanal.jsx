import React from 'react'

const LocationSearchPanal = ({vehiclePanelOpen, setVehiclePanalOpen, setPanalOpen}) => {
	const locations = [
		"24B near Kapoors Cafe, Coding School, Bhopal",
		"MG Road, Opposite Arera Stadium, Bhopal",
		"Jahangirpuri, Near New Market, Bhopal",
		"Hoshangabad Road, Bhadbhada, Bhopal",
		"MP Nagar, Zone 1, Central Market, Bhopal",
		"Rajwada, Near Old City, Bhopal",
		"Kolar Road, IT Park, Bhopal",
		"Shyamala Hills, Residential Area, Bhopal",
		"Misrod, Industrial Area, Bhopal",
		"Berasia Road, Outskirts, Bhopal",
		"Gulmohar Crossing, Business District, Bhopal"
	]
  return (
	<div>
	{
		locations.map((location, index)=>{
			return (
				<div 
				className='flex items-center border-2 px-2 rounded-xl my-2 border-white active:border-gray-100  justify-left gap-4' 
				key={index}
				onClick={()=>{
					setVehiclePanalOpen(true);
					setPanalOpen(false);
				}}
				>
					<h2 className='bg-[#eee] p-2 rounded-full flex items-center justify-center h-10 w-12'>
						<i className="ri-map-pin-fill text-xl"></i>
					</h2>
					<h4 className='font-medium'>
						{location}
					</h4>
				</div>
			)
		})
	}	  
	</div>
  )
}

export default LocationSearchPanal
