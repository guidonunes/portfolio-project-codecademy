import { createSlice } from '@reduxjs/toolkit';
import { getBackgroundImage } from '../backgroundImage/backgroundImageSlice';
import {  getQuote } from '../quote/quoteSlice';


export const errorSlice = createSlice({
  name: "errors",
  initialState: {
    errorMessage: "",
    retryHandler: null,
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
      state.retryHandler = null;

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBackgroundImage.rejected, (state, action) => {
        state.errorMessage = "Getting image failed";
        state.retryHandler = action.meta.arg;
      })
      .addCase(getQuote.rejected, (state, action) => {
        state.errorMessage = "Getting quote failed";
        state.retryHandler = action.meta.arg;
      });
  }
});

export const { clearErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
