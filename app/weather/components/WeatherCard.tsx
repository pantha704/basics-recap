'use client'
import React, { useEffect, useState } from 'react'
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import fetchWeather from './fetchWeather'; // Assuming you have this function to fetch weather data

const WeatherCard = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchInitialWeather = async () => {
            const initialCity = 'New York'; // Default city
            setCity(initialCity);
            const data = await fetchWeather(initialCity);
            if (data) {
                setWeatherData(data);
            }
        }
        fetchInitialWeather();
    }
    ,[]);
    

    const handleSearch = async () => {
        if (city.trim() === '') {
            alert('Please enter a city name');
            return;
        }
        const data = await fetchWeather(city);
        // console.log('Weather data:', data);
        if (data) {
            setWeatherData(data);
        }
    }
  return (
     <div className='w-[90%] max-w-[470px] bg-gradient-to-br from-[#00feba] to-[#5b548a] text-white mt-[100px] mx-auto rounded-[20px] p-[40px_35px] text-center'>
        <WeatherSearch city={city} setCity={setCity} handleSearch={handleSearch}/>    
        <WeatherData data={weatherData} />
    </div>
  )
}

export default WeatherCard