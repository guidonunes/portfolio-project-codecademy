import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import quoteApi from '../../api/quote';

// Async thunk to fetch the quote
export const getQuote = createAsyncThunk("quote/getQuote", async () => {
  const response = await quoteApi.getQuote();
  return response[0]; // Extract the first object from the array
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    author: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuote.fulfilled, (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    });
    builder.addCase(getQuote.rejected, (state, action) => {
      console.error('Failed to fetch quote:', action.error.message);
    });
  },
});

export default quoteSlice.reducer;
