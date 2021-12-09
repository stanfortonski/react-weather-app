import React from 'react'
import useCityWeather from '../useCityWeather'
import { WeatherContext } from '../WeatherContext'
import WeatherDisplay from './WeatherDisplay'
import WeatherSearcher from './WeatherSearcher'

export default function WeatherCard() {
    const cityWeather = useCityWeather();

    return (
        <div className="weather-card card shadow">
            <div className="card-body m-0 p-0">
                <div className="row m-0 h-100">
                    <WeatherContext.Provider value={cityWeather}>
                        <div className="col-md site-start py-4">
                            <WeatherSearcher />
                        </div>

                        <div className="col-md site-end py-4">
                            <WeatherDisplay />
                        </div>
                    </WeatherContext.Provider>
                </div>
            </div>
        </div>
    )
}
