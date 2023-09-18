import React from 'react';
import './_commonStyle.css'

const CustomIndicator = ({ onClickHandler, active, index, label }) => {
  const indicatorClasses = `inline-block w-4 h-0.5 mx-2 cursor-pointer ${
    active ? 'bg-black' : 'bg-gray-400'
  }`;

  return (
    <span
      className={indicatorClasses}
      onClick={() => onClickHandler(index)}
      title={label}
    />
  );
};

export default CustomIndicator;
