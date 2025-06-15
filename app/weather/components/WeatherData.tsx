import React from 'react'
import {     
    CloudRain, 
    Droplets, 
    Wind,
} from 'lucide-react'
import fetchWeather from './fetchWeather';

const WeatherData = ({data}: any) => {
    if (!data) {
        fetchWeather("New York").then(fetchedData => {
            if (fetchedData) {
                data = fetchedData;
            } else {
                console.error("Failed to fetch weather data");
            }
        }
        );
    }
    if (!data || !data.weather || !data.main || !data.wind) {
        return <div className='text-center text-red-500'>Weather data is not available</div>;
    }
    const extracted = {
        weather: data.weather[0].main,         // e.g., "Haze"
        temp: Math.round(data.main.temp - 273.15), // Convert Kelvin to Celsius
        humidity: data.main.humidity ,          // e.g., 79
        wind: data.wind.speed ,                 // e.g., 5.14
        city: data.name                          // e.g., "Kolkata"
    };
    console.log(extracted);
    let {temp, humidity, wind, city} = extracted
  
    return (
    <div className='mt-15'>
            <CloudRain size={94} className="mx-auto my-6" />
            <h1 className='text-[60px] font-bold'>{temp}&nbsp;&deg;C</h1>
            <h2 className='text-[35px] font-medium mt-1'>{city}</h2>
            <div className='flex justify-between gap-8 mt-10'>
                <div className="flex flex-col items-center justify-center mt-4 mx-auto">
                    <div className="flex items-center space-x-2">
                        <Droplets size={58} />
                        <p className="text-[30px] font-light">{humidity}%</p>
                    </div>
                    <p className='text-[20px] pt-2 font-medium'>Humidity</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-4 mx-auto space-x-2">
                    <div className='flex items-center space-x-2'>
                        <Wind size={58} />
                        <p className="text-[30px] font-light">{wind} km/h</p>
                    </div>
                    <p className='text-[20px] pt-2 font-medium'>Wind Speed</p>
                </div>
            </div>
        </div>
  )
}

export default WeatherData