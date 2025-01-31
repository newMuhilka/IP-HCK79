const bcrypt = require('bcrypt');

const hashPassword = async (pswd) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pswd, salt);
};

const comparePassword = async (pswd,hashedPswd) => {
  return await bcrypt.compare(pswd, hashedPswd);
};

module.exports = { hashPassword, comparePassword };