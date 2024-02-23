import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`Connected to MongoDB`);
}).catch((err) => {
    console.log(`Error in MongoDB`, err);
});

const app = express();

// Fetch port from environment variable or use default value 3000
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, world!"); // example 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
