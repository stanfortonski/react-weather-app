
import React, { useContext } from 'react'
import { WeatherContext } from '../WeatherContext'
import WeatherResult from './WeatherResult'

export default function WeatherDisplay() {
    const { weather } = useContext(WeatherContext);

    return (
        <>
            { weather ? <WeatherResult weather={weather} /> : ''}
        </>
    )
}
