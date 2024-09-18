import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherMapApi from "../../api/openWeatherMap";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ city, state }) => openWeatherMapApi.getWeather(city, state)
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "",
    state: "",
    metadata: {}, // Initialize metadata as an empty object
    temperature: "", // Initialize temperature as an empty string or null
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.metadata = action.payload.weatherMetadata || {}; // Safeguard with fallback value
      state.temperature = action.payload.temperature || ""; // Safeguard with fallback value
    });
  }
});

export const { setCity, setState } = weatherSlice.actions;

export default weatherSlice.reducer;
