import mongoose from "mongoose";



const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Make sure email is unique and required
  password: { type: String, required: true }, // Ensure password is required
});


const User = mongoose.model("User", userSchema);
export default User;
