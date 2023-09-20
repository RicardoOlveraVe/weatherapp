import { useState } from "react"

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    
    const handleChangeTemp = () => setIsCelsius(!isCelsius)

  return (
      <article >
        <div className="container">
            <div className="weather">
                <h1 className="weather__title">Wheather App</h1>
                <h2 className="weather__city">{weather?.name}, {weather?.sys.country}</h2>
                <div className="weather__content">
                    <div className="weather__img">
                        <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    </div>
                        <section className="information">
                            <h3 className="information-description">"{weather?.weather[0].description}"</h3>
                            <ul className="information-list">
                                <li><span className="info">Wind Speed </span><span className="info2">{weather?.wind.speed}m/s</span></li>
                                <li><span className="info">Clouds </span><span className="info2">{weather?.clouds.all}%</span></li>
                                <li><span className="info">Pressure </span><span className="info2">{weather?.main.pressure}hPa</span></li>
                            </ul>
                        </section>
                </div>
                <div className="weather__temp">
                    <h2 className="temp">{isCelsius ? `${temp?.celsius}ºC` : `${temp?.farenheit}ºF`}</h2>
                    <button className="weather__btn" onClick={handleChangeTemp}>Change to {isCelsius ? 'ºF' : 'ºC'}</button>
                </div>
            </div>
        </div>
    </article>
  )
}

export default WeatherCard 