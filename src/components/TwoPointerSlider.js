import React, { useState } from "react";
import Slider from "react-slider";

const SalarySlider = ({ minsalary, setminsalary, maxsalary, setmaxsalary }) => {
  // State to hold the current value of the slider
  const [values, setValues] = useState([minsalary, maxsalary]);

  // Handle change event for the slider
  const handleChange = (newValues) => {
    setValues(newValues); // Update local state

    // Update parent state
    setminsalary(newValues[0]);
    setmaxsalary(newValues[1]);
  };

  // Function to format the salary with 'k' and ensure proper formatting for 0 values
  const formatSalary = (value) => {
    const salaryInThousands = value * 1; // No change in value
    return `₹${salaryInThousands}k`; // No .0 or / in the middle
  };

  return (
    <div style={styles.salaryContainer}>
      <span style={styles.salaryLabel}>
        <strong>Salary Per Month</strong>{" "}
        <span style={styles.salaryRange}>{`${formatSalary(
          values[0]
        )} - ${formatSalary(values[1])}`}</span>
      </span>
      <div style={styles.sliderWrapper}>
        <Slider
          className="slider"
          value={values}
          onChange={handleChange}
          min={0}
          max={100}
          thumbClassName="thumb"
        />
      </div>

      <style>
        {`
          /* Styles for the slider component */
          .slider {
              height: 3px; /* Thinner line */
              width: 100%;
              background-color: #000; /* Black color for the line */
              border-radius: 2px;
              position: relative;
          }

          /* Styles for the slider thumb */
          .thumb {
              height: 12px;
              width: 12px;
              border-radius: 50%;
              background-color: #000;
              cursor: grab;
              box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              display: flex;
              align-items: center;
              justify-content: center;
          }

          /* Inner white ball inside the black thumb */
          .thumb::before {
              content: '';
              height: 5px;
              width: 5px;
              background-color: #fff;
              border-radius: 50%;
          }

          /* Fix the size of the slider component to avoid layout shifts */
          .sliderWrapper {
              width: 100%;
              height: 30px; /* Fixed height to account for thumb size */
              display: flex;
              align-items: center;
              justify-content: center;
          }

          /* Styles for the slider active state */
          .thumb.active {
              box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  salaryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  salaryLabel: {
    fontWeight: "400", // Matching font weight with Filter component
    fontSize: "14px", // Matching font size with Filter component
    marginBottom: "5px",
    color: "#000", // Same color as other input fields
  },
  salaryRange: {
    fontFamily: "monospace", // Use monospace to ensure equal character width
    display: "inline-block",
    textAlign: "right",
    fontSize: "14px", // Matching font size with Filter component
    color: "#000", // Same color as other input fields
    width: "180px", // Fixed width to maintain consistent size
  },
  sliderWrapper: {
    width: "100%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default SalarySlider;
