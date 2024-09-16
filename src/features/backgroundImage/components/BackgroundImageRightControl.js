import React from 'react';
import { useDispatch } from 'react-redux';
import { switchToNextBackgroundImage } from '../backgroundImageSlice';


const BackgroundImageRightControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Previous background image"
      onClick={() => {
        dispatch(switchToNextBackgroundImage());
      }}
    >
      {'>'}
    </button>
  );
};

export default BackgroundImageRightControl;
