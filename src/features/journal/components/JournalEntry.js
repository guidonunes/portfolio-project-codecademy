import React from 'react';
import { useDispatch } from 'react-redux';
import { removeEntry, toggleDone } from '../journalSlice';
import Confetti from 'react-dom-confetti';

const JournalEntry = ({children, id, isDone }) => {
  const dispatch = useDispatch();

  return (
    <div className ={`entry`}>
      <div className="entry-actions-container">
        <button
          arial-label="Delete"
          className="delete"
          onClick={() => dispatch(removeEntry(id))}
        >
          Remove
        </button>
        <button
        aria-label="Mark done"
        className="done"
        onClick={() => dispatch(toggleDone(id))}
        >
          {isDone ? 'Undo' : 'Done'}
          <Confetti active={isDone} config={{ spread: 360 }}/>
        </button>
      </div>
      {children}
    </div>
  );
};

export default JournalEntry;
