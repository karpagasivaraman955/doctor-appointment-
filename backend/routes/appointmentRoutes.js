// backend/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const sendEmail = require('../utils/sendEmail');

// Book an appointment
router.post('/book', async (req, res) => {
  try {
    const { patientName, patientEmail, doctorId, appointmentDate } = req.body;

    // Find the doctor
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Check if the doctor is available on the selected date
    const isDateAvailable = doctor.availableDates.some(
      (date) => new Date(date).toDateString() === new Date(appointmentDate).toDateString()
    );

    if (!isDateAvailable) {
      return res.status(400).json({ message: 'Doctor is not available on this date' });
    }

    // Create a new appointment
    const newAppointment = new Appointment({
      patientName,
      doctorId,
      appointmentDate,
    });
    await newAppointment.save();

    // Send confirmation email
    const emailSubject = 'Appointment Confirmation';
    const emailMessage = `Dear ${patientName},\n\nYour appointment with Dr. ${doctor.name} is confirmed for ${new Date(appointmentDate).toLocaleString()}.\n\nThank you for using our service.`;

    await sendEmail(patientEmail, emailSubject, emailMessage);

    res.status(201).json({ message: 'Appointment booked successfully, email sent' });
  } catch (err) {
    res.status(400).json({ message: 'Error booking appointment', error: err.message });
  }
});

module.exports = router;
