const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const matchPassword = require("../utility/matchPassword");
const makeHash = require("../utility/makeHash");

/**
 * @desc register user
 * @route POST / REGISTER
 * @access PUBLIC
 */
const userRegister = asynchandler(async (req, res) => {
  const { name, email, password, username } = req.body;

  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    res.status(409).json({ msg: "This email already exists" });
  }

  const hashPassword = makeHash(password);

  const data = await User.create({
    name,
    email,
    password: hashPassword,
    username
  });

  if (!data) {
    res.status(400).json({ msg: "can't create user" });
  }

  res.status(200).json({ msg: "new user created", data });
});

/**
 * @desc login user
 * @route POST / LOGIN
 * @access PUBLIC
 */
const userLogin = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    res.status(400).json({ msg: "all feilds are required" });
  }

  // check login user
  const loginUser = await User.findOne({ email });
  if (!loginUser) {
    res.status(404).json({ msg: "Invalid email address" });
  }

  // match password
  const passwordCheck = matchPassword(password, loginUser.password);
  if (!passwordCheck) {
    res.status(404).json({
      msg: "wrong password"
    });
  }

  // generate access token
  const accessToken = jwt.sign(
    {
      email: loginUser.email,
      username: loginUser.username
    },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE
    }
  );

  // set token in cookie
  res
    .cookie("authToken", accessToken, {
      httpOnly: false,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })
    .json({
      msg: "user login success",
      token: accessToken,
      loginUser
    });
});

// user logout
const userLogout = asynchandler(async (req, res) => {
  const cookie = req.cookies;

  if (!cookie) {
    res.status(404).json({msg: "can't delete cookie"})
  }
  res
    .clearCookie("authToken", {
      httpOnly: false,
      secure: false
    })
    .json({ msg: "logged out" });
});

const me = asynchandler(async (req, res) => {
  if (!req.me) {
    res.status(401).json({ msg: "you are not logged in" });
  }

  res.status(200).json({ msg: "ok", data: req.me });
});

// module export
module.exports = { userRegister, userLogin, userLogout, me };
