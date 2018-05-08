
const crypto = require('crypto');
const bcrypt = require('bcryptjs'); // or bcryptjs

function sha256AsBase64(data) {
  return crypto.createHash('sha256')
    .update(data)
    .digest('base64');
}

function bcryptSaltFromUsername(username) {
  const hash = crypto.createHash('sha256').update(username).digest();
  return '$2a$05$' + bcrypt.encodeBase64(hash, 16);
}

function bcryptUserPassword(username, password) {
  const userSalt = bcryptSaltFromUsername(username);
  return bcrypt.hashSync(sha256AsBase64(password), userSalt);
}

module.exports.doItAll = (username, password, salt) => {
  const bcryptPassword = bcryptUserPassword(username, password);
  const challenge = bcrypt.hashSync(bcryptPassword, salt);

  return challenge;
};
