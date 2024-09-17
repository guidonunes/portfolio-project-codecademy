import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuote } from './quoteSlice';

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, loading, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>; // Display loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message
  }

  if (!quote) {
    return <p>No quote available</p>; // Fallback if there's no quote
  }

  return (
    <div id="quote">
      <p className="quote-message">"{quote}"</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

export default Quote;
