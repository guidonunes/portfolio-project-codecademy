import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';
import '../../../styles/journal.scss'; // Adjust the relative path as necessary


const JournalEntries = () => {
  const { entries } = useSelector((state) => state.journal);

  return (
    <div className="surface">
      <ul className="entries-list">
        {entries.map(({ text, isDone, color }, index) => (
          <li
            key={text}
            className={`${color} surface-styles ${
              isDone ? "entry-done" : ""
            }`}
          >
            <JournalEntry id={index} isDone={isDone}>
              {text}
            </JournalEntry>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalEntries;
