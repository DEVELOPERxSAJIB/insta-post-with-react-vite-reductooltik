const multer = require("multer");

// create diskstorage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname );
  },

  destination: (req, file, cb) => {
    if (file.fieldname == "profile") {
      cb(null, "api/public/images");
    }

    if (file.fieldname == "gallery") {
      cb(null, "api/public/gallery");
    }

    if (file.fieldname == "post-image") {
      cb(null, "api/public/posts");
    }
  }
});

// multer middleware
const postPhotoMiddleware = multer({ storage }).single(
  "post-image"
);

const photoMiddleware = multer({ storage }).fields([
  {
    name: "profile",
    maxCount: 1
  },
  {
    name: "gallery",
    maxCount: 5
  }
]);

// module exports
module.exports = {
  postPhotoMiddleware,
  photoMiddleware
}