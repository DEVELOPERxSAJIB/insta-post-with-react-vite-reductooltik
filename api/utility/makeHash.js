const bcrypt = require("bcryptjs");

// make hash password
const makeHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

// module default
module.exports = makeHash;
