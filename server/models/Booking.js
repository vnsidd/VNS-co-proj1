const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  customerName: String,
  customerPhone: String,
  bookingDate: String,     // e.g. "2025-07-25"
  bookingTime: String,     // e.g. "3:30 PM"
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
