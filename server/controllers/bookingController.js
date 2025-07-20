const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { user, service, date } = req.body;

    const booking = new Booking({ user, service, date });
    await booking.save();

    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getBookingsByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate('service');
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
