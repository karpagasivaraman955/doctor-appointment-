// frontend/src/components/DoctorRegistration.js
import { useState } from 'react';
import axios from 'axios';

const DoctorRegistration = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [availableDates, setAvailableDates] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/api/doctors/register', {
        name,
        specialty,
        availableDates: availableDates.split(',').map(date => new Date(date.trim()))
      });
      alert('Doctor registered successfully');
    } catch (err) {
      console.error(err);
      alert('Error registering doctor');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Doctor's Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Specialty" 
        value={specialty} 
        onChange={(e) => setSpecialty(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Available Dates (comma separated)" 
        value={availableDates} 
        onChange={(e) => setAvailableDates(e.target.value)} 
        required 
      />
      <button type="submit">Register Doctor</button>
    </form>
  );
};

export default DoctorRegistration;
