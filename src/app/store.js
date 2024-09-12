import { configureStore } from '@reduxjs/toolkit';
import journalReducer from '../features/journal/journalSlice';

export default configureStore({
  reducer: {
    journal: journalReducer,
  }
});
