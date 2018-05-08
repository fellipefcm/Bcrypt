
const { doItAll } = require('../helper/cripto.helper');

module.exports.bcript = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt = req.body.salt;
  
  const doItAllReturnValue = doItAll(username, password, salt);
  
  res.status(200).send({
    challenge: doItAllReturnValue,
  });
};
