import React from 'react'
import { Search } from 'lucide-react'

const WeatherSearch = ({city, setCity, handleSearch}: any) => {
    
  return (
    <form
        className='w-[100%] flex content-center place-content-between'
        onSubmit={e => {
            e.preventDefault();
            handleSearch(city);
        }}
    >
        <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder='Enter city name'
            spellCheck="false"
            className='border-0 outline-0 bg-[#ebfffc] text-[#555] p-[10px_25px] h-[60px] rounded-[30px] flex-1 mr-4 text-[18px]'
        />
        <button
            type="submit"
            className='border-0 outline-0 bg-[#ebfffc] text-[#555] rounded-[50%] w-15 h-15 cursor-pointer flex items-center justify-center hover:bg-[#d4f9f6] transition-all duration-300 ease-in-out'
        >
            <Search />
        </button>
    </form>
  )
}

export default WeatherSearch