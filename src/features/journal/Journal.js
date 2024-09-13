import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import JournalEntries from './components/JournalEntries';
import { addEntry } from './journalSlice';

const Journal = () => {
  const [newEntry, setNewEntry] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newEntry.trim() === '') {
      return;
    }

    dispatch(addEntry(newEntry));
    setNewEntry('');
  }

  return (
    <>
      <div id="journal" className="surface">
        <h2 className="surface-header">What's on your mind today?</h2>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className = "journal-input"
            placeholder='Type a word...'
            maxLength="10"
            value = {newEntry}
            onChange={(e) => {
              setNewEntry(e.target.value);
            }}
            aria-label="Journal entry"
          />
        </form>
      </div>
      <JournalEntries />
    </>
  );
};

export default Journal;
