import React from 'react';
import { useDispatch } from 'react-redux';
import { switchToPreviousBackgroundImage } from '../backgroundImageSlice';


const BackgroundImageLeftControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Previous background image"
      onClick={() => {
        dispatch(switchToPreviousBackgroundImage());
      }}
    >
      {'<'}
    </button>
  );
};

export default BackgroundImageLeftControl;
