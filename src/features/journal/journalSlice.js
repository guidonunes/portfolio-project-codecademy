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
  'vibrant-magenta',
  'vibrant-indigo',
  'vibrant-turquoise',
  'vibrant-maroon',
  'vibrant-olive',
  'vibrant-silver',
  'vibrant-gold',
  'vibrant-brown',
  'vibrant-aqua',
  'vibrant-rose',
  'vibrant-charcoal'
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
