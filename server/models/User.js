const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  otp: { type: String }, // Store OTP temporarily
  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
