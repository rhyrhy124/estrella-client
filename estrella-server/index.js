require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");

const app = express();

// DB
connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

// TEST
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});