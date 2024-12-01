// frontend/src/components/DoctorsList.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/doctors');
        setDoctors(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Available Doctors</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
            <button onClick={() => alert(`Book an appointment with Dr. ${doctor.name}`)}>
              Book Appointment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
