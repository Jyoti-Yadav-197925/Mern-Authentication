import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.error(`Error in MongoDB connection:`, err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

// Create Express app
const app = express();

// Parse JSON bodies of incoming requests
app.use(express.json());

// Set up routes
app.use('/api/user', usersRoutes);
app.use('/api/auth', authRoutes);

// Fetch port from environment variable or use default value 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
