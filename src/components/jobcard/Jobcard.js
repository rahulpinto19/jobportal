import React, { useState } from "react";
import "./Jobcard.css";
import swiggy from "../../Assets/swiggy.png";
import amazon from "../../Assets/amazon.png";
import tesla from "../../Assets/tesla.png";
import exp from "../../Assets/exp.png";
import onsite from "../../Assets/onsite.png";
import sal from "../../Assets/sal.png";

const JobCard = ({ job }) => {
  const {
    companyName,
    jobDescription,
    jobTitle,
    jobType,
    location,
    salary,
    _id,
    createdAt,
  } = job;

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

  // Define job details
  const stringArray = ["swiggy", "amazon", "tesla"];
  const rand = parseInt(_id.slice(-1), 16);

  const j = {
    logo: stringArray[rand % stringArray.length],
    title: jobTitle,
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    desc1:
      "A user-friendly interface lets you browse stunning photos and videos",
    desc2:
      "Filter destinations based on interests and travel style, and create personalized recommendations",
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

  return (
    <div className="job-card">
      <div className="job-header">
        <div className="log-surround">
          <img
            src={Logo[j.logo] || Logo.unknown}
            alt="company logo"
            className="company-logo"
          />
        </div>
        <span className="time-ago">{timeAgo}</span>
      </div>
      <div className="job-title">
        <h3>{j.title}</h3>
      </div>
      <div className="job-details">
        <div className="job-detail-item">
          <img src={exp} alt="experience" className="icon" /> {j.experience}
        </div>
        <div className="job-detail-item">
          <img src={onsite} alt="job type" className="icon" /> {j.type}
        </div>
        <div className="job-detail-item">
          <img src={sal} alt="salary" className="icon" /> {j.salary}
        </div>
      </div>
      <div className="job-description">
        <ul>
          <li>{j.desc1}</li>
          <li>{j.desc2}</li>
        </ul>
      </div>
      <button className="apply-button" onClick={handleApplyClick}>
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
