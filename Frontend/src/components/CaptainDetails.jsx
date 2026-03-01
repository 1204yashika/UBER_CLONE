import React from 'react'

const CaptainDetails = () => {
  return (
	<>
	  <div className='flex items-center justify-between'>
			<div className='flex items-center justify-start gap-3 '>
				<img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
				<h4 className='text-lg font-medium'>Yashika Agrawal</h4>
			</div>
			<div>
				<h4 className='text-xl font-semibold'>295.4</h4>
				<p className='text-sm text-gray-600'>Earned</p>
			</div>
		</div>
		<div className='flex p-3 mt-8 bg-gray-50 rounded-xl justify-center gap-4 items-start'>
			<div  className='text-center'>
				<i class="text-3xl mb-2  font-extralight ri-time-line"></i>
				<h5 className="text-lg font-medium">10.5</h5>
				<p className='text-sm text-gray-600'>Hours Online</p>
			</div>
			<div className='text-center'>
				<i class="text-3xl mb-2  font-extralight ri-speed-up-fill"></i>
				<h5 className="text-lg font-medium">10.5</h5>
				<p className='text-sm text-gray-600'>Hours Online</p>

			</div>
			<div className='text-center'>
				<i class="text-3xl mb-2  font-extralight ri-sticky-note-add-line"></i>
				<h5 className="text-lg font-medium">10.5</h5>
				<p className='text-sm text-gray-600'>Hours Online</p>	
			</div>
		</div>
	</>
  )
}

export default CaptainDetails
