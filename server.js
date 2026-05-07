require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const logger = require("./middleware/logger");

const app = express();
console.log("Type of connectDB:", typeof connectDB);

// DB Connection
connectDB();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/assignments", require("./routes/assignmentRoutes"));
app.use("/api/submissions", require("./routes/submissionRoutes"));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));