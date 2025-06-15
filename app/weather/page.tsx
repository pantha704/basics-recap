import React from 'react'
import WeatherCard from './components/WeatherCard'

const page = () => {
        
  return (
    <div className='flex items-start justify-center h-screen bg-gradient-to-br from-[#5b548a] to-[#00feba]'>
      <WeatherCard />
    </div>
  )
}

export default page