import React from 'react'
import fetchWeather from './fetchWeather'

import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Droplets, Wind } from 'lucide-react'

const weatherIconMap: any = {
  Clear: <Sun size={94} className="mx-auto my-6" />,
  Clouds: <Cloud size={94} className="mx-auto my-6" />,
  Rain: <CloudRain size={94} className="mx-auto my-6" />,
  Drizzle: <CloudRain size={94} className="mx-auto my-6" />,
  Thunderstorm: <CloudLightning size={94} className="mx-auto my-6" />,
  Snow: <CloudSnow size={94} className="mx-auto my-6" />,
  Mist: <Wind size={94} className="mx-auto my-6" />,
  Smoke: <Wind size={94} className="mx-auto my-6" />,
  Haze: <Wind size={94} className="mx-auto my-6" />,
  Dust: <Wind size={94} className="mx-auto my-6" />,
  Fog: <Wind size={94} className="mx-auto my-6" />,
  Sand: <Wind size={94} className="mx-auto my-6" />,
  Ash: <Wind size={94} className="mx-auto my-6" />,
  Squall: <Wind size={94} className="mx-auto my-6" />,
  Tornado: <Wind size={94} className="mx-auto my-6" />,
};

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
    let {weather, temp, humidity, wind, city} = extracted
    // console.log(data.weather[0].main);
    // Fallback to "Clear" if weather is not found in the map
    
    let weatherIcon = weatherIconMap[weather];
    return (
    <div className='mt-15'>
            {weatherIcon}
            <h1 className='text-[60px] font-bold'>{temp}&nbsp;&deg;C</h1>
            <h2 className='text-[35px] font-medium mt-1'>{weather} in {city}</h2>
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