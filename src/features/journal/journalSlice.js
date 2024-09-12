import { createSlice } from '@reduxjs/toolkit';


export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    entries: [
      { text: 'Learn react', isDone: false },
      { text: 'Code project', isDone: false },
      { text: 'Make coffee', isDone: false },
      { text: 'Code again', isDone: false },
     ],
     doneEntries: []
    },
    reducers: {
      addEntry: (state, action) => {
        state.entries.push({ text: action.payload, isDone: false})
      },
      removeEntry: (state, action) => {
        state.entries = state.entries.filter((entry, index) => index !== action.payload)
      },
      toggleDone: (state, action) => {
        state.entries[action.payload].isDone = !state.entries[action.payload].isDone;
      }

    }
  });

  export const { addEntry, removeEntry, toggleDone } = journalSlice.actions;

  export default journalSlice.reducer;
