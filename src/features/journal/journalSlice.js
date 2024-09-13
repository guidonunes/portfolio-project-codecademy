import { createSlice } from '@reduxjs/toolkit';


const COLORS = [
  'vibrant-red',
  'vibrant-blue',
  'vibrant-green',
  'vibrant-yellow',
  'vibrant-purple',
  'vibrant-orange',
  'vibrant-pink',
  'vibrant-teal',
  'vibrant-cyan',
  'vibrant-lime',
  'vibrant-magenta', // New color
  'vibrant-indigo', // New color
  'vibrant-turquoise', // New color
  'vibrant-maroon', // New color
  'vibrant-olive', // New color
  'vibrant-silver', // New color
  'vibrant-gold', // New color
  'vibrant-brown', // New color
  'vibrant-aqua', // New color
  'vibrant-rose', // New color
  'vibrant-charcoal' // New color
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};


export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    entries: [],
     doneEntries: []
    },
    reducers: {
      addEntry: (state, action) => {
        state.entries.push({ text: action.payload, isDone: false, color: getRandomColor()});
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
