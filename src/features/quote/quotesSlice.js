import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const QUOTE_API_URL = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';

const headers = {
  'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_QUOTE_API_KEY,
};


export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(QUOTE_API_URL, { method: 'GET', headers });

      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }

      const data = await response.json();

      return {
        quote: data.content,
        author: data.originator.name,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state of the slice
const initialState = {
  quote: '',
  author: '',
  isLoading: false,
  error: null,
};


const quotesSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to load quote';
      });
  },
});


export const selectQuote = (state) => state.quote.quote;
export const selectAuthor = (state) => state.quote.author;
export const selectIsLoading = (state) => state.quote.isLoading;
export const selectError = (state) => state.quote.error;

export default quotesSlice.reducer;
