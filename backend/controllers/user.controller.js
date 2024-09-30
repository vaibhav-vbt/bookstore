import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Log the incoming request data

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashP = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullName,
      email,
      password: hashP, // Ensure hashed password is saved to 'password' field
    });

    // Log the new user object before saving

    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullName: createdUser.fullName,
        email: createdUser.email
      }
    }
    );
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or Password" });
    } else {
      res.status(200).json({
        message: "Login successful", user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email
        }
      })

    }
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
