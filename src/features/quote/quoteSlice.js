import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import quoteApi from '../../api/quote';


export const getQuote = createAsyncThunk("quote/getQuote", quoteApi.getQuote);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    author: "",
  },
  reducers: (builder) => ({}),
  extraReducers: (builder) => {
    builder.addCase(getQuote.fulfilled, (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    });
  },
});

export default quoteSlice.reducer;
