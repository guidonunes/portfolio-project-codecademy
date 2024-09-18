import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoords, fetchWeatherData } from "../../api/openWeatherMap";


export const getCoords = createAsyncThunk('weather/fetchCoords', async () => {
  return await fetchCoords();
});

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (coords) => {
  return await fetchWeatherData(coords);
});

const initialState = {
  location: '',
  temp: '',
  description: '',
  icon: '',
  lat: '',
  lon: '',
  country: '',
  isLoading: false,
  error: null, //
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
          // Handling coords fetch
          .addCase(getCoords.pending, (state) => {
              state.isLoading = true;
              state.error = null;
          })
          .addCase(getCoords.fulfilled, (state, action) => {
              const { lat, lon } = action.payload;
              state.lat = lat;
              state.lon = lon;
              state.isLoading = false;
          })
          .addCase(getCoords.rejected, (state, action) => {
              state.error = action.error.message;
              state.isLoading = false;
          })

          // Handling weather fetch
          .addCase(fetchWeather.pending, (state) => {
              state.isLoading = true;
              state.error = null;
          })
          .addCase(fetchWeather.fulfilled, (state, action) => {
              const { location, temp, description, icon, country } = action.payload;
              state.location = location;
              state.temp = temp;
              state.description = description;
              state.icon = icon;
              state.country = country;
              state.isLoading = false;
          })
          .addCase(fetchWeather.rejected, (state, action) => {
              state.error = action.error.message;
              state.isLoading = false;
          });
  },
});

export default weatherSlice.reducer;
export const selectLon = (state) => state.weather.lon || '';
export const selectLat = (state) => state.weather.lat || '';
export const selectLocation = (state) => state.weather.location || 'Unknown';
export const selectCountry = (state) => state.weather.country || 'Unknown';
export const selectTemp = (state) => state.weather.temp || '--';
export const selectDescription = (state) => state.weather.description || 'No description available';
export const selectIcon = (state) => state.weather.icon || 'default_icon';
