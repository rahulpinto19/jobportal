const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());
const cors = require("cors");
app.use(cors());
const connectToMongo = require("./db");
const upload = require("./routes/uploadjob");
const fetchjob = require("./routes/fetchjobs");

// Define a basic route
app.use("/", upload);
app.use("/", fetchjob);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
