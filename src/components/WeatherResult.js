import React from 'react'

export default function WeatherResult({ weather }) {
    return (
        <div>
            <h5>{weather.city_name} | Temperature: {weather.temp} &deg;C</h5>

            <figure className="text-center">
                <img src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} title={weather.weather.description} alt={weather.weather.description} />
                <figcaption>{weather.weather.description}</figcaption>
            </figure>
        </div>
    )
}
