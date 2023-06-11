const mongoose = require("mongoose");

// create schema
const postSchema = mongoose.Schema(
  {
    caption: { type: String, trim: true },
    imageUrl: { type: String, default: null, trim: true }
  },
  { timestamps: true }
);


// module exports
module.exports = mongoose.model("Post", postSchema)