import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from './weatherSlice';


const Weather = () => {
  const { city, state, metadata, temperature } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather({ city, state }));
  }, [dispatch, city, state]);

  return (
    <div className = "weather">
      <div className="temperature-container">
        <img
          src={`http://openweathermap.org/img/w/${metadata.icon}@2x.png`}
          alt="weather-icon"
        />
        <div className="weather-text">
          <p className="temperature">{temperature}</p>
          <p className="description">{metadata.description}</p>
        </div>
      </div>
    </div>
  );
}
