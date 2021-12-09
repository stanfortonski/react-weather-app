import axios from 'axios'
import { WEATHERBIT_API_KEY } from './config'

export const getWeather = city => {
    return axios.get(`https://api.weatherbit.io/v2.0/current?key=${WEATHERBIT_API_KEY}&city=${city}`);
}
