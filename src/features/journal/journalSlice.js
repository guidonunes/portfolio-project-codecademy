import { createSlice } from '@reduxjs/toolkit';


const COLORS = [
  'pastel-red',
  'pastel-blue',
  'pastel-green',
  'pastel-yellow',
  'pastel-purple',
  'pastel-orange',
  'pastel-pink',
  'pastel-teal'
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};


export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    entries: [
      { text: 'Code Hard', isDone: false, color: getRandomColor() },
      { text: 'Make Coffee', isDone: false, color: getRandomColor() }
    ],
     doneEntries: []
    },
    reducers: {
      addEntry: (state, action) => {
        state.entries.push({ text: action.payload, isDone: false, color: getRandomColor() });
      },
      removeEntry: (state, action) => {
        state.entries.splice(action.payload, 1);
      },
      toggleDone: (state, action) => {
        state.entries[action.payload].isDone = !state.entries[action.payload]
          .isDone;
      }
    }
  });

  export const { addEntry, removeEntry, toggleDone } = journalSlice.actions;

  export default journalSlice.reducer;
