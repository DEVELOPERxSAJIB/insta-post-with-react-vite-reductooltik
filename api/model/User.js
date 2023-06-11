const mongoose = require("mongoose");

// create schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    photo: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: true
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// module export
module.exports = mongoose.model("User", userSchema);