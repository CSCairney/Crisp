import React, { useState } from 'react';
import "./styles.scss"

const RangeSlider:React.FC = () => {
  const [value, setValue] = useState(50);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="range"
      />
      <output htmlFor="rangeInput" className="bubble" style={{ left: `${value}%` }}>
        {value}
      </output>
    </div>
  );
};

export default RangeSlider;
