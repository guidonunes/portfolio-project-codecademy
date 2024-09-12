import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';
import '../../../styles/journal.scss'; // Adjust the relative path as necessary


const JournalEntries = () => {
  const { entries } = useSelector((state) => state.journal);
  const COLORS = ['red', 'blue', 'green', 'yellow', 'purple'];

  const getEntryColor = (index) => {
    return COLORS[index % COLORS.length];
  }

  return (
    <div className="surface">
      <ul className="entries-list">
        {entries.map(({ text, isDone }, index) => (
          <li
            key={text}
            className={`${getEntryColor(index)} surface-styles ${
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
