import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import JournalEntries from './components/JournalEntries';
import { addEntry } from './journalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Weather from '../weather/Weather';


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
      <Weather/>
        <h2 className="surface-header">What's on your mind today?</h2>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className = "journal-input"
            placeholder='Type something...'
            maxLength="15"
            value = {newEntry}
            onChange={(e) => {
              setNewEntry(e.target.value);
            }}
            aria-label="Journal entry"
          />
          <button type="submit" className="btn btn-primary btn-add">
             <FontAwesomeIcon icon={faCircleCheck} />
          </button>
        </form>
      </div>
      <JournalEntries />
    </>
  );
};

export default Journal;
