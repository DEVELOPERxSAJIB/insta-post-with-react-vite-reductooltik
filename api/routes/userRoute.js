const express = require("express");
const {
  getAllUser,
  createUser,
  getSingleUser,
  delteSingleUser,
  editSingleUser
} = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");

// init router
const router = express.Router();
router.use(verifyToken)

// routes
router.get("/", getAllUser);
router.post("/registration", createUser);
router.get("/:id", getSingleUser);
router.delete("/:id", delteSingleUser);
router.patch("/:id", editSingleUser);

// module exports
module.exports = router;
