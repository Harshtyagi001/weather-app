import React from 'react'

function Forecast(props) {
  return (
    <div>
    <div className='text-white my-8'>
    <h1 className='text-xl font-semibold my-3 uppercase'>{props.title}</h1>
    <hr className='mb-3'></hr>
      <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-col justify-center items-center'>
       <p className='text-sm'>2:00 PM</p>
       <p>19&deg;</p>
      </div> 
      <div className='flex flex-col justify-center items-center'>
       <p className='text-sm'>3:00 PM</p>
       <p>19&deg;</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
       <p className='text-sm'>4:00 PM</p>
       <p>19&deg;</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
       <p className='text-sm'>5:00 PM</p>
       <p>20&deg;</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
       <p className='text-sm'>6:00 PM</p>
       <p>21&deg;</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Forecast