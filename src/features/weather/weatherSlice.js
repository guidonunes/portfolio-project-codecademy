import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherMapApi from "../../api/weather";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({city, state}) => openWeatherMapApi.getWeather(city, state)
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Seattle",
    state: "WA",
    metadata: {},
    temperature: ""
  },
  reducers: (builder) => ({
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    }
  }),
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.metadata = action.payload.weatherData;
      state.temperature = action.payload.temperature;
    });
  }
});

export const { setCity, setState } = weatherSlice.actions;
export default weatherSlice.reducer;
