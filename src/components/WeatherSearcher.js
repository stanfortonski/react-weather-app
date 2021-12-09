import React, { useState, useContext } from 'react'
import { getWeather } from '../WeatherAPI'
import { WeatherContext } from '../WeatherContext'
import WeatherResult from './WeatherResult';

export default function WeatherSearcher() {
    const { setCity } = useContext(WeatherContext);

    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);

    const onSearch = () => {
        if (search.trim() !== ''){
            getWeather(search).then(res => {
                setResults(res.data.data);
            });
        }
    }

    const onKeyEnterSearch = e => {
        if (e.key === 'Enter') 
            onSearch();
    }

    return (
        <>
            <div className="input-group">
                <input type="text" placeholder="Search" className="form-control" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={onKeyEnterSearch} />
                <button type="button" className="btn btn-primary" onClick={onSearch}>Search</button>
            </div>
       
            {results ? 
                <div className="list-group pt-3">
                    {results.map((weather, index) => (
                        <div className="list-group-item shadow" onClick={() => setCity(weather.city_name)} key={index}>
                            <WeatherResult weather={weather} />
                        </div> 
                    ))}
                </div>
                : results === undefined ? <p className="text-secondary pt-3">Not found.</p> : ''
            }
        </>
    )
}
