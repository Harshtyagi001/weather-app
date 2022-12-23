// import { useState,useEffect } from "react";
// import getWeatherData from './weatherservice';
// const key="a29cc047c636224657daadca054084ee";


// const getWeatherData=(city)=>{ 
//   const [data,setData]=useState(null);
//   useEffect(()=>{
//     const fetchApi=async()=>{

//       const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key;
      
//       const response=await fetch(url);
//       const resJson=await response.json();
//       setData(resJson);
//     } 
//     fetchApi();
//   },[city]);  
// };

// export default getWeatherData;

// // function getWeatherData(infoType,searchParams){
// //   const url =new URL(base_url+"/"+infoType);
// //   url.search=new URLSearchParams({...searchParams,appid:key});

// //   return fetch(url).then((res)=>res.json())
// // };

// // function formatCurrentWeather(data){
// //  const{
// //  coord:{lon,lat},
// //  main:{temp,feels_like,temp_min,temp_max,pressure,humidity},
// //  name,
// //  dt,
// //  sys:{country,sunrise,sunset},
// //  weather,
// //  wind:{speed}
// //  }=data
 
// // const {main:details,icon}=weather[0];

// //  return {lon,lat,temp,feels_like,temp_min,temp_max,pressure,humidity,name,dt,country,sunrise,sunset,details,icon,speed};
// // }

// // const getFormattedWeatherData=async(searchParams)=>{
// //   const formattedCurrentWeather= await getWeatherData('weather',searchParams).then(formatCurrentWeather)

// //   return formattedCurrentWeather;
// // }


// // export default getFormattedWeatherData;