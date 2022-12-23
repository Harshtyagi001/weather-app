import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from "./components/inputs";
import TimeAndLocation from './components/timeandlocation';
import WeatherDetails from './components/weatherDetails';
import Forecast from './components/forecast';
import getFormattedWeatherData from './services/weatherservice';
import { useEffect,useState } from 'react';
// import getWeatherData from './services/weatherservice';


function App() {

 return (
  <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
    <Inputs/>
  </div>
 );
}

export default App;
