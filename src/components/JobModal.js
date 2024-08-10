import React, { useState } from "react";
import axios from "axios";

const JobModal = ({ isOpen, onClose }) => {
  // Initialize state for form fields
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salary, setSalary] = useState("");
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
      padding: "10px",
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
      marginTop: "20px",
    },
    saveDraftButton: {
      padding: "10px 20px",
      background: "#f0f0f0",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    publishButton: {
      padding: "10px 20px",
      background: "#3d0c78",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to the server, save as draft, etc.)
    const jobData = {
      jobTitle,
      companyName,
      location,
      jobType,
      salary,
      applicationDeadline,
      jobDescription,
    };
    // console.log(jobData)
    const dummyData = {
      name: "rahul",
      age: "21",
    };
    try {
      const response = await axios.post("https://jobportal-backend-orpin.vercel.app/upload", {
        jobData,
      });
      if (response.data.message === "job saved in the database") {
        onClose();
        alert("job uploaded successfully");
      } else {
        alert("technical issue");
      }
    } catch (err) {
      console.log(err.message);
    }

    // Reset form or close modal after submission
  };

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
                  value={salaryMin}
                  onChange={(e) => setSalaryMin(e.target.value)}
                  placeholder="₹0"
                />
                <input
                  style={styles.salaryInput}
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="₹12,00,000"
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
            />
          </div>
          <div style={styles.formActions}>
            <button type="button" style={styles.saveDraftButton}>
              Save Draft
            </button>
            <button type="submit" style={styles.publishButton}>
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
