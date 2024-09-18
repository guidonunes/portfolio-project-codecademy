export const fetchCoords = async () => {
  const response = await fetch(
      `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.REACT_APP_GEOCODING_KEY}`
  );
  const json = await response.json();
  return {
      lat: json.location.latitude,
      lon: json.location.longitude,
  };
};

export const fetchWeatherData = async ({ lat, lon }) => {
  const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
  );
  const json = await response.json();
  return {
      location: json.name,
      temp: json.main.temp,
      description: json.weather[0].description,
      icon: json.weather[0].icon,
      country: json.sys.country,
  };
};

const fetchWeatherApi = {
  fetchCoords,
  fetchWeatherData,
};

export default fetchWeatherApi;
