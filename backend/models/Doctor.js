// backend/models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availableDates: [{ type: Date }], // Array of available dates
});

module.exports = mongoose.model('Doctor', doctorSchema);
