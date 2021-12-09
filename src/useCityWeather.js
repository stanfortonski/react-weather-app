import { useState, useEffect } from 'react'
import store from './store'
import { getWeather } from './WeatherAPI'

const REFRESH_TIME = 30000;

export default function useCityWeather(){
    const [weather, _setWeather] = useState(null);
    const [city, _setCity] = useState(store.getCity());

    const updateWeather = () => {
        getWeather(city).then(res => {
            _setWeather(res.data.data[0]);
            console.log(res.data.data[0]);
        });
    }

    useEffect(() => {
        if (!window.weather_interval)
            updateWeather();

        window.weather_interval = setInterval(() => {
            updateWeather();
        }, REFRESH_TIME);

        return () => {
            clearInterval(window.weather_interval);
            window.weather_interval = undefined;
        }
    }, [city]);

    const setCity = newCity => {
        clearInterval(window.weather_interval);
        window.weather_interval = undefined;
        store.setCity(newCity);
        _setCity(newCity);
    }

    return {
        weather,
        city,
        setCity
    }
}