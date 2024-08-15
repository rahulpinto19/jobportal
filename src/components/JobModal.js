import React, { useState } from "react";
import axios from "axios";
import arrow from ".././Assets/arrow.png";
import publishIcon from ".././Assets/publish.png"; // Replace this with your actual publish icon path

const JobModal = ({ isOpen, onClose }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [minsalary, setMinSalary] = useState("");
  const [maxsalary, setMaxSalary] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  if (!isOpen) return null;

  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100,
    },
    modalContent: {
      background: "#fff",
      borderRadius: "10px",
      padding: "20px",
      width: "550px",
      maxWidth: "95%",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      position: "relative",
    },
    modalHeader: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "18px",
      fontWeight: "bold",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    formRow: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
    formGroup: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      padding: "5px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    salaryInputWrapper: {
      display: "flex",
      gap: "10px",
    },
    salaryInput: {
      width: "45%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
    },
    textarea: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      resize: "vertical",
    },
    formActions: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    buttonBase: {
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    saveDraftButton: {
      background: "#f0f0f0",
      color: "#333",
      border: "1px solid #ccc",
    },
    publishButton: {
      background: "#007bff",
      color: "#fff",
    },
    icon: {
      width: "14px",
      height: "14px",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "none",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
  };

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleMinSalaryChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= 100000 && value <= maxsalary) {
      setMinSalary(value);
    } else {
      setMinSalary("");
    }
  };

  const handleMaxSalaryChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= minsalary && value <= 100000) {
      setMaxSalary(value);
    } else {
      setMaxSalary("");
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formattedJobTitle = capitalizeWords(jobTitle);
    const jobData = {
      jobTitle: formattedJobTitle,
      companyName,
      location,
      jobType,
      minsalary,
      maxsalary,
      applicationDeadline,
      jobDescription,
    };
    try {

      const response = await axios.post("https://jobportal-backend-orpin.vercel.app/upload", {
        jobData,
      });
      if (response.data.message === "job saved in the database") {
        onClose();
        alert("Job uploaded successfully");
      } else {
        alert("Technical issue");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2 style={styles.modalHeader}>Create Job Opening</h2>
        <form style={styles.form} onSubmit={handleFormSubmit}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Job Title</label>
              <input
                style={styles.input}
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Full Stack Developer"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Company Name</label>
              <input
                style={styles.input}
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Amazon, Microsoft, Swiggy"
                required
              />
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Location</label>
              <select
                style={styles.input}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value="">Choose Preferred Location</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Job Type</label>
              <select
                style={styles.input}
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                required
              >
                <option value="">Choose Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Permanent">Permanent</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Salary Range</label>
              <div style={styles.salaryInputWrapper}>
                <input
                  style={styles.salaryInput}
                  type="number"
                  value={minsalary}
                  onChange={handleMinSalaryChange}
                  placeholder="₹0"
                  required
                />
                <input
                  style={styles.salaryInput}
                  type="number"
                  value={maxsalary}
                  onChange={handleMaxSalaryChange}
                  placeholder="₹100,000"
                  required
                />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Application Deadline</label>
              <input
                style={styles.input}
                type="date"
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                min={today}
                required
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Job Description</label>
            <textarea
              style={styles.textarea}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Please share a description to let the candidate know more about the job role"
              required
            />
          </div>
          <div style={styles.formActions}>
            <button
              type="button"
              style={{ ...styles.buttonBase, ...styles.saveDraftButton }}
              onClick={() => {
                console.log("button clicked");
                onClose();
              }}
            >
              Save Draft
              <img src={arrow} alt="arrow" style={styles.icon} />
            </button>
            <button
              type="submit"
              style={{ ...styles.buttonBase, ...styles.publishButton }}
            >
              Publish
              <img src={publishIcon} alt="publish" style={styles.icon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
