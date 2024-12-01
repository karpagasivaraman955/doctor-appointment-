// frontend/src/components/BookAppointment.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookAppointment = ({ doctorId }) => {
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [availableDates, setAvailableDates] = useState([]);

  // Fetch available dates for the selected doctor
  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/doctors/${doctorId}/available-dates`);
        setAvailableDates(response.data);
      } catch (err) {
        console.error(err);
        alert('Error fetching available dates');
      }
    };

    if (doctorId) {
      fetchAvailableDates();
    }
  }, [doctorId]);

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/appointments/book', {
        patientName,
        patientEmail,
        doctorId,
        appointmentDate,
      });
      alert('Appointment booked successfully');
    } catch (err) {
      console.error(err);
      alert('Error booking appointment');
    }
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Patient Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Select Date</label>
          <Calendar
            value={appointmentDate}
            onChange={handleDateChange}
            tileDisabled={({ date }) => !availableDates.some(
              (availableDate) => new Date(availableDate).toDateString() === date.toDateString()
            )}
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
