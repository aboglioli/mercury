const { generateHash } = require('../../core/authentication');
const UserSchema = require('../../schemas/user');

async function create(data) {
  data.password = generateHash(data.password);

  const user = new UserSchema(data);
  await user.save();

  return user;
}

async function getById(userId) {
  return await UserSchema.findById(userId);
}

async function getByEmail(email) {
  return await UserSchema.findOne({email});
}

async function getAll() {
  return await UserSchema.find({});
}

module.exports = {
  create,
  getById,
  getByEmail,
  getAll
};
