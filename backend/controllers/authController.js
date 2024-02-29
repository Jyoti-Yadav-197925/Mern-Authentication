// Importing the User model from the usersModal.js file
import User from "../models/usersModal.js";
import bcryptjs from "bcryptjs";

// Controller function for user signup
export const signup = async (req, res) => {
  // Logging the request body to the console for debugging purposes
  console.log(req.body);

  // Destructuring username, email, and password from the request body
  const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);

  // Creating a new User instance with the provided data
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    // Saving the new user to the database
    await newUser.save();

    // Sending a success response with status code 201 and a JSON object indicating successful user creation
    res.status(201).json({ message: "User is created successfully" });
  } catch (e) {
    res.status(500).json(error.message);
  }
};
