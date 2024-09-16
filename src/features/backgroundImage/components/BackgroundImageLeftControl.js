import React from 'react';
import { useDispatch } from 'react-redux';
import { switchToPreviousBackgroundImage } from '../backgroundImageSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const BackgroundImageLeftControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Previous background image"
      onClick={() => {
        dispatch(switchToPreviousBackgroundImage());
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

export default BackgroundImageLeftControl;
