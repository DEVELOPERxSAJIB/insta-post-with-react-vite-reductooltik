const bcrypt = require("bcryptjs");

// compare password
const matchPassword = (password, savedpasswrod) => {
  const passMatch = bcrypt.compareSync(password, savedpasswrod);
  return passMatch;
};

// module export
module.exports = matchPassword;
