import React from 'react'
import { UilSearch,UilLocationPoint  } from '@iconscout/react-unicons'
import { useState ,useEffect} from 'react';
import Cities from "./topCities"
import{
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  } from "@iconscout/react-unicons";
const key="a29cc047c636224657daadca054084ee";
 let formattedData;
function Inputs() {
 
  const [data,setData]=useState();
  const [search,setSearch]=useState("");
  const [cityName,setCityName]=useState();
  const getWeatherData=async(city)=>{
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key;
   await fetch(url)
    .then((response) => response.json())
    .then(data=>setData(data))
  }

 useEffect(()=>{
  console.log("enter")
  getWeatherData("delhi");
 },[cityName]);

const handleChange=(e)=>{
  console.log(e.target.value);
  setSearch(e.target.value);
}

const handleClick=()=>{
  setCityName(search);
  getWeatherData(cityName);
  console.log('clicked')
}
const date=new Date();

const dt=date.getDate();

const yr=date.getFullYear();
  
var month = date.toLocaleString('default', { month: 'short' });

const day=date.toLocaleString('en-us', {  weekday: 'long' });


  return (<div>
     
     <div className='flex items-center justify-around my-6'>
     {Cities.map(city=>(
      <button key={city.id} onClick={()=>getWeatherData(city.title)} className='text-white text-lg font-medium'>{city.title}</button>
     ))}
     </div>
    <div className='flex flex-row justify-center my-6'>
    <div  className='flex flex-row w-3/4 justify-center items-center space-x-4'>
      <input onChange={handleChange}name="search" value={search} type="text" placeholder='search for a city....' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'></input>
      <button onClick={handleClick}><UilSearch className="text-white cursor-pointer w-10 transition ease-out hover:scale-125"/></button> 
    </div>
    </div>
    <div>
    <div className='flex flex-row justify-center items-center my-6'>
     <p className='text-white text-lg font-extralight'>{day}, {dt} {month} {yr} </p>
    </div>
    <div className='flex flex-row justify-center items-center my-3'>
    <p className='text-white text-3xl font-medium '></p>
    </div>
   </div>
   <div>
    <div className='flex flex-row justify-center items-center my-8 '>
      <p className='text-white text-3xl'>{data?.name},{data.sys?.country} </p>
    </div>
    <div className='flex flex-row items-center justify-between my-10'>
     <p className='text-white text-3xl font-semibold'>{data.weather[0].main}</p>
     <p className='text-white text-3xl font-semibold'>{Math.floor(data.main.temp-273)}&deg;</p>
   </div>

   <div className='flex flex-col justify-center items-center my-8'>
     <div className='flex flex-row text-xl font-semibold text-white my-2'>
      <UilTemperature size={40} className="mr-3" />
      Real fell <span className='ml-3'>{Math.floor(data.main.feels_like-273)}&deg;</span>   
       </div>
       <div className='flex flex-row text-xl font-semibold text-white my-2'>
      <UilWind size={40} className="mr-3" />
      Wind<span className='ml-3'> {data.wind.speed} km/h</span>   
       </div>     
         <div className='flex flex-row text-xl font-semibold text-white my-2'>
      <UilTear size={40} className="mr-3" />
      Humidity <span className='ml-3'>{data.main.humidity} %</span>   
       </div>
     </div>

    <div className='flex flex-row my-5 justify-center items-center text-white text-m '>
    {/* <UilSun/>
    <p className='font-light'>Rise <span>{rise}</span></p>
    <p className='font-light ml-2'>|</p>
    <UilSunset/>
    <p className='font-light'>Set <span>{set}</span></p>
    <p className='font-light ml-2'>|</p> */}
    <UilArrowUp/>
    <p  className='font-light'>High <span>{Math.floor(data.main.temp_max-273)}&deg;</span></p>
    <p className='font-light ml-2'>|</p>
    <UilArrowDown/>
    <p className='font-light'>Low <span>{Math.floor(data.main.temp_min-273)}&deg;</span></p>
    </div>

    </div>
    </div>
  )
}

export default Inputs