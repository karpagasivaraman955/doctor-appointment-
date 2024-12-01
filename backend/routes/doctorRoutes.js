// backend/routes/doctorRoutes.js

const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Get all doctors with available dates for booking
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching doctors', error: err.message });
  }
});

// Get available dates for a specific doctor
router.get('/:doctorId/available-dates', async (req, res) => {
  try {
    const { doctorId } = req.params;
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(doctor.availableDates);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching available dates', error: err.message });
  }
});

module.exports = router;
