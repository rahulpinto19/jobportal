import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Jobcard from "./components/jobcard/Jobcard";
import "./App.css";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [credentials, setCredentials] = useState({
    salary: 150000,
    location: "",
    jobType: "",
    title: "",
  });
  const fetchFilteredData = async () => {
    console.log("In fetching function");

    try {
      const response = await axios.get("https://jobportal-backend-orpin.vercel.app/fetchjobs", {
        params: { credentials }, // Parameters sent in the URL
      });
      setJobs(Array.from(response.data));

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchFilteredData();
    console.log("useEffect is working");
  }, [credentials]);
  return (
    <div className="app-container">
      <Navbar />

      <Filter
        setjobs={setJobs}
        credentials={credentials}
        setCredentials={setCredentials}
      />

      <div className="job-card-container">
        {jobs.length === 0 ? <h1>No jobs to show</h1> : (
         jobs.map((job, index) => (
          <Jobcard key={index} job={job} />
        ))
          
          
          )}
      </div>
    </div>
  );
};

export default App;
