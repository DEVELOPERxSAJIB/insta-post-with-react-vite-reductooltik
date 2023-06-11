const express = require('express');
const { createNewPost } = require('../controllers/postController');
const { postPhotoMiddleware } = require('../utility/multer');

// init router
const router = express.Router()

// routers
router.post("/create", postPhotoMiddleware, createNewPost);

// module exports
module.exports = router;