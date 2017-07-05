const { generateHash } = require('../../core/authentication');
const UserSchema = require('../../schemas/user');

async function create(data) {
  data.password = generateHash(data.password);

  const user = new UserSchema(data);
  await user.save();

  return getById(user._id);
}

async function getById(userId) {
  return await UserSchema
    .findById(userId)
    .select('-password');
}

async function getByEmail(email) {
  return await UserSchema
    .findOne({email});
}

async function getAll() {
  return await UserSchema
    .find({})
    .select('-password');
}

async function removeById(userId) {
  return await UserSchema.findById(userId).remove();
}

async function removeByEmail(email) {
  return await UserSchema.find({email}).remove();
}

async function removeAll() {
  return await UserSchema.remove({});
}

module.exports = {
  create,
  getById,
  getByEmail,
  getAll,
  removeByEmail,
  removeById,
  removeByEmail,
  removeAll
};
