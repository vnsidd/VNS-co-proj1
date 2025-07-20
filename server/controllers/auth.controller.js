const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit

exports.sendOTP = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ msg: 'Phone required' });

  let user = await User.findOne({ phone });
  if (!user) user = new User({ phone });

  const otp = generateOTP();
  user.otp = otp;
  await user.save();

  console.log(`📲 OTP for ${phone}: ${otp}`);
  return res.status(200).json({ msg: 'OTP sent (mocked)' });
};

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;
  const user = await User.findOne({ phone });

  if (!user || user.otp !== otp) return res.status(401).json({ msg: 'Invalid OTP' });

  user.verified = true;
  user.otp = null; // Clear OTP
  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return res.json({ token, user: { phone: user.phone, verified: true } });
};
