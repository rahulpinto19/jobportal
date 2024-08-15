import React, { useState } from "react";
import Slider from "react-slider";
import "./pstyle.css";

const PriceSlider = () => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Price Range</h2>
      <p>Use the slider to select a price range:</p>
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={0}
        max={100}
      />
    </div>
  );
};

export default PriceSlider;
