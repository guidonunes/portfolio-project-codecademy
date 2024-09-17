import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import quoteApi from '../../api/quote';

export const getQuote = createAsyncThunk("quote/getQuote", async () => {
  return await quoteApi.getQuote();
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",  // Ensure it's initialized
    author: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuote.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuote.fulfilled, (state, action) => {
        state.quote = action.payload.quote;
        state.author = action.payload.author;
        state.loading = false;
      })
      .addCase(getQuote.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default quoteSlice.reducer;
