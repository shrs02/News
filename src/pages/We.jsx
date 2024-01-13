import React,{ useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import { connect } from 'react-redux';
import axios from 'axios';

function We(){
    const [load,setLoad] = useState(true)
    const [weatherData, setWeatherData] = useState(null);
    const cont = useParams()
    const fetchd = async ()=>{
        const options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: {city: `${cont.slug}`},
            headers: {
              'X-RapidAPI-Key': '145f5e0da4msh7adab9b8dc9ebe4p1bcd68jsn359f4f96fa97',
              'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setWeatherData(response.data);
              setLoad(false);
          } catch (error) {
              console.error(error);
          }
    }

    useEffect(()=>{
        fetchd();
    },[cont.slug])
    return (
        !load?(
           
              <div className=' md:fixed p-4 pb-96 overflow-y-scroll flex flex-col items-center overflow-x-hidden md:top-46 lg:top-32 md:left-32 lg:left-40 w-full h-full md:right-32  bg-gray-200 lg:right-40 md:w-auto  lg:m-20 '>
              <h1 className="text-4xl font-bold mb-6">Weather in {cont.slug}</h1>
                  <h2 className="text-3xl font-bold mb-4">Current Weather</h2>
                  <div className="flex  flex-wrap items-center justify-between bg-blue-100 p-6 rounded-3xl">
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Temperature: </h3>
                      <p className="text-xl">{weatherData.temp}°C</p>
                    </div>
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Minimum Temperature: </h3>
                      <p className="text-xl">{weatherData.min_temp}°C</p>
                    </div> 
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Maximum Temperature: </h3>
                      <p className="text-xl">{weatherData.max_temp}°C</p>
                    </div> 
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Feels like: </h3>
                      <p className="text-xl"> {weatherData.feels_like}°C</p>
                    </div> 
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Humidity: </h3>
                      <p className="text-xl">{weatherData.humidity}%</p>
                    </div> 
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Cloud PCT: </h3>
                      <p className="text-xl">{weatherData.cloud_pct}</p>
                    </div> 
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Wind Speed: </h3>
                      <p className="text-xl">{weatherData.wind_speed}m/s</p>
                    </div> 
                    <div className='py-4 m-1 lg:w-1/4 md:w-1/2 w-full'>
                      <h3 className="text-2xl font-bold">Wind Degrees: </h3>
                      <p className="text-xl">{weatherData.wind_degrees}°</p>
                    </div> 
                  </div>
            </div>

          ):(<p className='md:fixed md:top-46 md:left-32 lg:left-40 md:right-32 lg:right-40 md:w-auto  lg:m-20'>Loading weather data...</p>)
    )
}

export default We
