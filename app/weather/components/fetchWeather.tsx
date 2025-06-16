import React from 'react'
import axios from 'axios'


const fetchWeather = async ( city : any) => {

    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=104d4e57e4b5b2296fcc9dd0a0bb0271`
        try {
            const response = await axios.get(api_url);
            if (!response || response.status !== 200) {
                console.error("Axios status error", response);
                alert("Status error. Please try again.");
                return;
            }
            const data = response.data;
            console.log(data.weather[0].main);
            return data;
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            alert("City not found");
        }
    }

export default fetchWeather