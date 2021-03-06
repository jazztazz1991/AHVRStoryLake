const mongoose = require('mongoose');

const Schema = mongoose.Schema; // eslint-disable-line
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: { type: String, select: false },
  firstName: String,
  lastName: String,
  email: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
