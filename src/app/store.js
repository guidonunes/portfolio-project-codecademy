import { configureStore } from '@reduxjs/toolkit';
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";
import quoteReducer from "../features/quote/quotesSlice";
import weatherReducer from "../features/weather/weatherSlice";
import journalReducer from '../features/journal/journalSlice';

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    journal: journalReducer,
    weather: weatherReducer,
    quote: quoteReducer,
  }
});
