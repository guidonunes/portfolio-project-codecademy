import React from 'react';
import { useDispatch } from 'react-redux';
import { switchToNextBackgroundImage } from '../backgroundImageSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



const BackgroundImageRightControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Previous background image"
      onClick={() => {
        dispatch(switchToNextBackgroundImage());
      }}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

export default BackgroundImageRightControl;
