import React, { useState } from "react";
import "./Jobcard.css";
import swiggy from "../../Assets/swiggy.png";
import amazon from "../../Assets/amazon.png";
import tesla from "../../Assets/tesla.png";

const JobCard = ({ job }) => {
  const { companyName, jobDescription, jobTitle, jobType, location, salary, _id, createdAt } = job;

  // Function to calculate the time difference between now and the createdAt time
  const timeSinceCreation = (date) => {
    const now = new Date();
    const createdDate = new Date(date);
    const differenceInSeconds = Math.floor((now - createdDate) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} days ago`;
    }
  };

  // Calculate how long ago the job was posted
  const timeAgo = timeSinceCreation(createdAt);

  // Split the job description into bullet points
  const bulletPoints = jobDescription.split(". ").filter((point) => point.trim() !== "");
  const stringArray = ["swiggy", "amazon", "tesla"];
  const rand = parseInt(_id.slice(-1), 16);

  // Randomly select a logo
  const j = {
    logo: stringArray[rand % stringArray.length],
    title: jobTitle,
    experience: "1-3 yr Exp",
    type: jobType,
    salary: salary + " LPA",
    description: bulletPoints, // Store bullet points array
  };

  const Logo = {
    swiggy: swiggy,
    amazon: amazon,
    tesla: tesla,
    unknown: "",
  };

  const [isExpanded, setIsExpanded] = useState(false);

  // Handle Apply Now button click
  const handleApplyClick = () => {
    alert(`You have applied for the position of ${j.title}`);
  };

  // Handle Read More / Less click
  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate description to 30 words
  const truncatedDescription = j.description.slice(0, 30).join(". ") + (j.description.length > 30 ? "..." : "");

  return (
    <div className="job-card">
      <div className="job-header">
        <img src={Logo[j.logo]} alt="company logo" className="company-logo" />
        <span className="time-ago">{timeAgo}</span>
      </div>
      <div className="job-title">
        <h3>{j.title}</h3>
      </div>
      <div className="job-details">
        <span className="job-experience">{j.experience}</span>
        <span className="job-type">{j.type}</span>
        <span className="job-salary">{j.salary}</span>
      </div>
      <div className="job-description">
        <ul>
          {isExpanded ? (
            j.description.map((point, index) => <li key={index}>{point}</li>)
          ) : (
            truncatedDescription
          )}
        </ul>
        {j.description.length > 30 && (
          <button className="read-more" onClick={handleToggleDescription}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
      <button className="apply-button" onClick={handleApplyClick}>
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
