
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  //const [image, setImage] = useState()
  const [inputValue, setInputValue] = useState('')

  console.log(weather)

  useEffect (() => {
    const succes = (pos) => {
      const obj = {
        lat: pos.coords.latitude, 
        long: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(succes)
  }, [])


  useEffect (() => {
    if (coords) {
      const ApiKey = '5488aad447c0f2e609a3a547ba581246'
      const url =`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${ApiKey}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          setInputValue(res.data.weather[0].description)
          const obj = {
            celsius:(res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
          setTemp(obj)
        })
        .catch (err => console.log(err))
    }
  }, [coords])

  /***************** Fondo *****************/

 /* useEffect(() => {
    const ApiKey = '9309442-4db5066f77ec716d788f0177c'
    const url = `https://pixabay.com/api/?key=${ApiKey}&q=${inputValue}`
    axios.get(url)
      .then(res => setImage(res.data))
      .catch(err => console.log(err))
  }, [inputValue])*/

  return (
   <div>
    <WeatherCard
      weather={weather}
      temp = {temp}
    />
   </div>
  )
}

export default App
