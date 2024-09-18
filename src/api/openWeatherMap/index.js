const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=imperial`;

export const getWeather = async (city, state) => {
  try {
    const response = await fetch(`${API_URL}&q=${city},${state}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const json = await response.json();
    return {
      weatherMetadata: json.weather[0] || {},
      temperature: json.main ? json.main.temp : "",
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { weatherMetadata: {}, temperature: "" };
  }
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
