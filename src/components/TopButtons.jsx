import React from 'react'
import Cities from "./topCities"
// import styles from './public/module.css'

function TopButtons() {
 
      return (
     <div className='flex items-center justify-around my-6'>
     {Cities.map(city=>(
      <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
     ))}
     </div>
  )
}

export default TopButtons