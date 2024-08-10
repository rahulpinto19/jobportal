const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const job = require("../models/job");

app.use(express.json());
app.use(cors());

// Route to fetch jobs
router.get("/fetchjobs", async (req, res) => {
  const { salary, location, jobType, title } = req.query.credentials;
  const query = {};
  
  if (salary) {
    query.salary = { $lte: Number(salary) }; // Filter for salaries less than or equal to the provided value
  }
  if (location) query.location = location;
  if (jobType) query.jobType = jobType;
  if (title) query.jobTitle = { $regex: new RegExp(title, "i") }; // Case-insensitive title match

  try {
    const results = await job.find(query);
    console.log(results.length)

    res.json(results); // Send the results as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Technical issue" });
  }
});

module.exports = router;
