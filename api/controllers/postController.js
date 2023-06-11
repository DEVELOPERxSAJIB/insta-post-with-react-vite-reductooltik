const asyncHandler = require("express-async-handler");
const Post = require("../model/Post")


// create a new post
const createNewPost = asyncHandler(async (req, res) => {
  const { caption } = req.body;

  const data = await Post.create({
    caption,
    imageUrl: req.file.filename
  });

  if (!data) {
    res.status(400).json({ msg: "Error creating post" });
  }

  res.status(201).json({ msg: "Post created successfully", data });
});

// module exports
module.exports = {
    createNewPost
}

