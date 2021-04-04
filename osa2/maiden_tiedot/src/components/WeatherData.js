import React, {useState, useEffect} from 'react'
import axios from 'axios'

const WeatherData = ({note}) => {

    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    
    const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + note.capital + '&units=metric&appid='+ api_key
    const [weather, setWeather] = useState([])

    console.log(weatherApi)

    useEffect(() => {
        axios
            .get(weatherApi)
            .then(response => {
                setWeather(response.data)
            })
    }, [])
      
        return (
          <>
            <h2>Weather in {note.capital} </h2>
            <div>
                {weather.weather && weather.weather[0].description}
            </div>
            <div>
                Temperature: {weather.weather && weather.main.temp} Celsius
            </div>
            <div>
                Wind: {weather.weather && weather.wind.speed} m/s
            </div>
          </>
      )   
    }

    export default WeatherData