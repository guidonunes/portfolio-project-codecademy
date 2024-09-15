import { configureStore } from '@reduxjs/toolkit';
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";
import journalReducer from '../features/journal/journalSlice';

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    journal: journalReducer,
  }
});
