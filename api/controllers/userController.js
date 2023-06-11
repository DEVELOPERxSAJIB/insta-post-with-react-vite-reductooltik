const User = require("../model/User");
const makeHash = require("../utility/makeHash");

/**
 * @desc get all user
 * @route GET / ALL USER
 * @access PUBLIC
 */
const getAllUser = async (req, res) => {
  try {
    const data = await User.find();

    if (!data) {
      res.status(404).json({ msg: "can't get all user" });
    }

    res.status(200).json({ msg: "All of our users are", data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * @desc create user
 * @route POST / CREATE
 * @access PUBLIC
 */
const createUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    // validation message
    if (!name || !email || !username || !password) {
      res.status(400).json({ msg: "all feilds are required" });
    }

    // check mail existing
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      res.status(409).json({ msg: "email alreday exists" });
    }

    // create new user
    if (!checkEmail) {
      const data = await User.create({
        name,
        email,
        username,
        password: makeHash(password)
      });

      // create response
      res.status(200).json({ msg: "new user created", data });
    }
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * @desc single user get
 * @route GET/ getSingleUser
 * @access PRIVATE
 */
const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await User.findById(id);

    if (!data) {
      res.status(404).json({ msg: "can't find single user" });
    }

    res.status(200).json({ msg: "single user geted", data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * @desc single user delete
 * @route GET/ deleteSingleUser
 * @access PRIVATE
 */
const delteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await User.findByIdAndDelete(id);

    if (!data) {
      res.status(400).json({ msg: "user deleted failed" });
    }

    res.status(200).json({ msg: "user successfully deleted", data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * @desc single user edit
 * @route GET/ editSingleUser
 * @access PRIVATE
 */
const editSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, username } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        username,
        password: makeHash(password)
      },
      { new: true }
    );

    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }

    res.status(200).json({ msg: "user updated successfully", user });
  } catch (error) {
    console.log(error.message);
  }
};

// module exports
module.exports = {
  getAllUser,
  createUser,
  getSingleUser,
  delteSingleUser,
  editSingleUser
};
