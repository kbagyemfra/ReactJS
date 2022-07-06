const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
    maxLength: [20, "maximum of 20 characters"],
  },
  username: {
    type: String,
    required: [true, "username must be provided"],
    trim: true,
    maxLength: [10, "maximum of 10 characters for username"],
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    maxLength: [30, "maximum of 30 characters"],
    unique: true,
  },
  city: {
    type: String,
    trim: true,
    maxLength: [20, "maximum of 20 characters"],
  },
  phone: {
    type: String,
    required: [true, "number must be provided"],
    trim: true,
    maxLength: [10, "maximum of 10 characters for phone number"],
    unique: true,
  },
  website: String,
  company: String,
});

UserSchema.plugin(uniqueValidator, {
  message: "Error, Seems like the {PATH} is already taken.",
});

module.exports = mongoose.model("User", UserSchema);
