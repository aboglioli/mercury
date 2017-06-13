const User = require('../resources/users/models');

async function authenticate(decoded, request, callback) {
  try {
    const user = await User.findById(decoded.id);

    if(!user) {
      return callback(null, false);
    }

    return callback(null, true, user);
  } catch(err) {
    return callback(null, false);
  }

}

module.exports = {
  authenticate
};
