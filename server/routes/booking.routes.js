const express = require('express');
const router = express.Router();
const Booking = require('../../backend/models/Booking');

// POST /api/bookings → create a booking
router.post('/', async (req, res) => {
  try {
    const { serviceId, customerName, customerPhone, bookingDate, bookingTime } = req.body;

    const booking = new Booking({
      serviceId,
      customerName,
      customerPhone,
      bookingDate,
      bookingTime
    });

    await booking.save();
    res.status(201).json({ message: 'Booking confirmed!', booking });
  } catch (err) {
    res.status(500).json({ error: 'Booking failed', details: err.message });
  }
});

module.exports = router;
