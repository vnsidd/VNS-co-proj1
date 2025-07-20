const express = require('express');
const router = express.Router();
const { createBooking, getBookingsByUser } = require('../controllers/bookingController');

// POST /api/bookings - Create a new booking
router.post('/', createBooking);

// GET /api/bookings/:userId - Get bookings for a user
router.get('/:userId', getBookingsByUser);

module.exports = router;
