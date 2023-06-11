const jwt = require("jsonwebtoken");
const User = require("../model/User");

// verify token
const verifyToken = (req, res, next) => {
  const authAccess = req.headers.authorization || req.headers.Authorization;

  if (!authAccess) {
    res.status(400).json({ msg: "unauthoraized" });
  }

  // keeping main token
  const token = authAccess.split(" ")[1];

  // verifying
  jwt.verify(token, process.env.ACCESS_TOKEN, async (err, decode) => {
    if (err) {
      res.status(400).json({ msg: "unauthoraized" });
    }

    const tokenUser = await User?.findOne({ email: decode?.email });
    req.me = tokenUser 
    
    next();
  });
};

// module exports
module.exports = verifyToken;
