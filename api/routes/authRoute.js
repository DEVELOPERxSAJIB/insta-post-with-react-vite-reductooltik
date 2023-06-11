const express = require("express");
const { userLogin, userRegister, userLogout, me } = require("../controllers/authController");
const verifyToken = require("../middlewares/verifyToken");

// init router
const router = express.Router();

// routes
router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.get("/me", verifyToken, me);

// module exports
module.exports = router;
