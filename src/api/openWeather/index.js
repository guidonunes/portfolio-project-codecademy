import { get } from "http";

const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`;

console.log('Open Weather API Key:', process.env.REACT_APP_OPEN_WEATHER_KEY);


export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherData: json.weather[0],
    temperature: json.main.temp,
  };
};

const openWeatherMapApi = {
  getWeather,
}

export default openWeatherMapApi;
