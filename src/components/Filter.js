import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwoPointerSlider from "./TwoPointerSlider";
import {
  faSearch,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faSearch} style={styles.icon} />
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
        <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
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
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
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
      <div style={styles.salaryContainer}>
        <TwoPointerSlider
          salary={credentials.salary}
          setSalary={(newSalary) =>
            setCredentials((prevState) => ({
              ...prevState,
              salary: newSalary,
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
    alignItems: "center",
    gap: "10px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "5px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    padding: "10px",
  },
  select: {
    border: "none",
    outline: "none",
    padding: "10px",
  },
  separator: {
    width: "2px",
    height: "40px",
    backgroundColor: "#000",
  },
  salaryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Filter;
