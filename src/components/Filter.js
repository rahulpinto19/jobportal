import React from "react";
import searchIcon from "../Assets/search.png"; // Importing search icon
import locationIcon from "../Assets/location.png"; // Importing location icon
import jobtype from "../Assets/jobtype.png";
import TwoPointerSlider from "./TwoPointerSlider";

const Filter = ({ setjobs, credentials, setCredentials }) => {
  // Function to handle input changes
  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={styles.filterContainer}>
      <div style={styles.inputGroup}>
        <img src={searchIcon} alt="Search" style={styles.icon} />{" "}
        {/* Using PNG image */}
        <input
          type="text"
          name="title"
          placeholder="Search by Job Title, Role"
          value={credentials.title}
          onChange={onChange}
          style={styles.searchInput}
        />
      </div>
      <div style={styles.separator}></div>
      <div style={styles.inputGroup}>
        <img src={locationIcon} alt="Location" style={styles.icon} />{" "}
        {/* Using PNG image */}
        <select
          name="location"
          value={credentials.location}
          onChange={onChange}
          style={styles.select}
        >
          <option value="">Preferred Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Gurgaon">Gurgaon</option>
          <option value="Banglore">Banglore</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Kolkata">Kolkata</option>
        </select>
      </div>
      <div style={styles.separator}></div>
      <div style={styles.inputGroup}>
        <img src={jobtype} alt="Job Type" style={styles.icon} />{" "}
        {/* Using PNG image */}
        <select
          name="jobType"
          value={credentials.jobType}
          onChange={onChange}
          style={styles.select}
        >
          <option value="">Job Type</option>
          <option value="Full-time">Full Time</option>
          <option value="Part-time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
      <div style={styles.separator}></div>
      <div style={styles.salaryContainer}>
        <TwoPointerSlider
          minsalary={credentials.minsalary}
          setminsalary={(newminsalary) =>
            setCredentials((prevState) => ({
              ...prevState,
              minsalary: newminsalary,
            }))
          }
          maxsalary={credentials.maxsalary}
          setmaxsalary={(newmaxsalary) =>
            setCredentials((prevState) => ({
              ...prevState,
              maxsalary: newmaxsalary,
            }))
          }
        />
      </div>
    </div>
  );
};

const styles = {
  filterContainer: {
    display: "flex",
    flexWrap: "wrap", // Allows items to wrap to the next line if needed
    alignItems: "center",
    gap: "10px",
    padding: "15px",
    borderRadius: "10px", // Rounded corners
    backgroundColor: "#fff", // Background color
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)", // Lighter shadow for the entire component
    width: "100%", // Ensure it covers the full width of its container
    maxWidth: "1200px", // Optional: set a max width if needed
    margin: "0 auto", // Center the component if it has a max-width
    marginBottom: "20px", // Add margin at the bottom
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    flex: "1 1 auto", // Allow the input groups to expand and fill available space
  },
  icon: {
    marginRight: "5px",
    width: "16px", // Adjust size of the icon if needed
    height: "16px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    padding: "10px",
    width: "100%", // Ensure input stretches to full width of its container
  },
  select: {
    border: "none",
    outline: "none",
    padding: "10px",
    width: "100%", // Ensure select box stretches to full width of its container
  },
  separator: {
    width: "1px",
    height: "30px",
    backgroundColor: "#ddd", // Light color for the separator
  },
  salaryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 auto", // Allow the salary container to expand and fill available space
  },
};

export default Filter;
