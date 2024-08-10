import React, { useState } from "react";

const SalarySlider = ({salary,setSalary}) => {
  // State to hold the current value of the slider
  // const [salary, setSalary] = useState(150000);

  // Handle change event for the slider
  const handleChange = (event) => {
    // Round the value to the nearest 5000 increment
    const newValue = Math.round(event.target.value / 5000) * 5000;
    setSalary(newValue);
  };

  return (
    <div style={styles.salaryContainer}>
      <span style={styles.salaryLabel}>Salary Per Month</span>
      <input
        type="range"
        min="25000"
        max="150000"
        step="1" // Ensure the slider steps by 5000 increments
        value={salary}
        onChange={handleChange}
        style={styles.slider}
      />
      <span style={styles.salaryRange}>
        {"25000 - "}
        {
          salary.toLocaleString()
        }
      </span>
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
    fontWeight: "500",
  },
  slider: {
    margin: "10px 0",
    width: "100%",
  },
  salaryRange: {
    fontWeight: "500",
  },
};

export default SalarySlider;
