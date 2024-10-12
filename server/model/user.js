import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: String
}); 

const User = mongoose.model("user",UserSchema);

export default User;